import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { supabase } from '../../supabaseClient';
import './Calendario.css';
import Header from '../Header';
import { useNavigate } from 'react-router-dom'; // 
import { useAuth } from '../../supabase/AuthProvider';

Modal.setAppElement('#root');

const Calendario8 = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [nextAppointment, setNextAppointment] = useState(null);
  const [pastAppointmentsModalOpen, setPastAppointmentsModalOpen] = useState(false);
  const [pastAppointments, setPastAppointments] = useState([]);
  const { user, setUser } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState(null);  // Almacenar la cita seleccionada
  const [modalOpenIs, setModalOpenIs] = useState(false);
  const [telefono, setTelefono] = useState('');

  

  useEffect(() => {
    const checkSessionAndLoadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
  
      if (!session) {
        navigate('/'); // Redirige si no hay sesión
      } else {
        await fetchUserProfile(session.user.id); // Carga los datos del usuario
        await fetchAppointments(); // Carga las citas del usuario
      }
    };
  
    checkSessionAndLoadProfile();
  }, [navigate]);

  const fetchUserProfile = async (userId) => {
    const { data: profile, error } = await supabase
      .from('users')
      .select('email')
      .eq('id', userId)
      .single();
  
    if (error) {
      console.error('Error al cargar el perfil del usuario:', error);
    } else {
      setName(profile.title);   // Cambiado de profile.name a profile.title
      setEmail(profile.email); // Establece el email del perfil en el formulario
    }
  };

  const fetchPastAppointments = async () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase.from('citas8').select().lt('date', currentDate).order('date', { ascending: false });

    if (error) {
      console.error('Error al cargar citas pasadas:', error);
    } else {
      setPastAppointments(data);
      setPastAppointmentsModalOpen(true);
    }
  };

  const closePastAppointmentsModal = () => {
    setPastAppointmentsModalOpen(false);
  };

  const availableTimes = ['22:00', '01:00', '04:00'];


  const fetchAppointments = async () => {
    const { data, error } = await supabase.from('citas8').select().order('date', { ascending: true });

    if (error) {
      console.error('Error al cargar citas:', error);
    } else {
      const futureAppointments = data.filter(cita => new Date(cita.date) > new Date());

      setEvents(futureAppointments.map(cita => ({
        id: cita.id,
        title: `${cita.email}`, // Información personalizada
        start: `${cita.date}T${cita.start_time}:00`,
        end: `${cita.date}T${cita.end_time}:00`,
      })));

      if (futureAppointments.length > 0) {
        const next = futureAppointments[0];
        setNextAppointment({
          email: user.email,
          date: next.date,
          start_time: next.start_time,
        });
      } else {
        setNextAppointment(null);
      }
    }
  };

  


  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDateClick = (info) => {
    const selectedDay = new Date(info.dateStr).getDay();

    if (selectedDay === 1 || selectedDay === 2) {
      setInfoModalIsOpen(true);
    } else {
      setSelectedDate(info.dateStr);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setAppointmentTitle('');
    setSelectedTime('');
  };

  const closeInfoModal = () => {
    setInfoModalIsOpen(false);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
  };

  const handleTimeSelect = async () => {
    const endTime = String(Number(selectedTime.split(':')[0]) + 2).padStart(2, '0') + ':00';

    const { error } = await supabase.from('citas8').insert([
      {
        email: user.email,
        telefono,
        date: selectedDate,
        start_time: selectedTime,
        end_time: endTime,
        
      },
    ]);

    if (error) {
      console.error('Error al agregar cita:', error);
      setSuccessMessage('Error al guardar la cita');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setSuccessMessage('Cita elegida con éxito');
      setTimeout(() => setSuccessMessage(''), 3000);
      await fetchAppointments();
      closeModal();
    }
  };

  const handleEventClick = async (clickInfo) => {
    const eventId = clickInfo.event.id; // ID del evento
    const { data, error } = await supabase.from('citas8').select().eq('id', eventId).single();

    if (error) {
        console.error('Error al cargar la cita:', error);
        return;
    }

    setSelectedEvent(data); // Establece la cita seleccionada en el estado
    setModalOpenIs(true); // Abre el modal
};

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentTime = `${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute}`;


  return (
    <div className='body'>   
    <div style={{ width: '60%', margin: 'auto', position: 'relative', marginTop: '180px', paddingBottom: '90px'}}>
      {successMessage && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 1000,
        }}>
          {successMessage}
        </div>
      )}

      
      <FullCalendar
         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
         initialView="dayGridMonth"
         selectable={true}
         editable={true}
         events={events}  // Los eventos que se mostrarán en el calendario
         eventContent={(eventInfo) => (
          <div style={{backgroundColor: '#134c8f', color: 'white', borderRadius:'5px', padding: '1px'}}>
            <b>{eventInfo.event.title}</b>
          </div>
        )}
         eventClick={handleEventClick}
         dateClick={handleDateClick}
         weekends={true}
         validRange={{
           start: currentDateString,
         }}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Seleccionar Hora"
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1000',
            borderRadius: '10px',
            padding: '20px',
            width: '80%',
            maxWidth: '400px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: '999',
          },
        }}
      >
        <h2>Registrar nueva cita</h2>
        <p>Fecha seleccionada: {selectedDate}</p>

        
        <div style={{fontSize:'20px', marginBottom:'20px'}}>
        <label>
          Correo electrónico:<br></br>
           {user.email}

          
        </label>
        </div>
        <div>
  <label htmlFor="telefono">Teléfono:</label>
  <input
    type="tel"
    id="telefono"
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
    placeholder="Introduce tu número de teléfono"
    style={{
      marginTop: '10px',
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
    }}
  />
</div>
        <div>
        {availableTimes.map((time) => {
    const isPastTime = selectedDate === currentDateString && time < currentTime;
    return (
      <button
        key={time}
        onClick={() => setSelectedTime(time)}
        disabled={isPastTime || events.some(event => event.start === `${selectedDate}T${time}:00`)}
        style={{
          margin: '5px',
          padding: '10px',
          backgroundColor: selectedTime === time ? '#007bff' : '#f0f0f0',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {time}
      </button>
    );
  })}

        </div>

        <button onClick={handleTimeSelect} disabled={!selectedTime} style={{ marginTop: '10px' }}>
          Confirmar Cita
        </button>
        <button onClick={closeModal} style={{ marginTop: '10px', marginLeft: '10px' }}>
          Cancelar
        </button>
      </Modal>

      <Modal
    isOpen={modalOpenIs}
    onRequestClose={() => setModalOpenIs(false)} // Cierra el modal
    contentLabel="Información de la cita"
    style={{
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        borderRadius: '10px',
        padding: '20px',
        width: '80%',
        maxWidth: '400px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '999',
      },
    }}
>
    <h2>Detalles de la Cita</h2>
    {selectedEvent && (
        <div>
            <p><strong>Usuario:</strong> {selectedEvent.email}</p>
            <p><strong>Teléfono:</strong> {selectedEvent.telefono}</p>
            <p><strong>Fecha:</strong> {selectedEvent.date}</p>
            <p><strong>Hora:</strong> {selectedEvent.start_time}-{selectedEvent.end_time}</p>
            <button
                onClick={async () => {
                    const { error } = await supabase.from('citas8').delete().eq('id', selectedEvent.id);
                    if (error) {
                        console.error('Error al eliminar la cita:', error);
                    } else {
                        setModalOpenIs(false); // Cierra el modal
                        setEvents(events.filter(event => event.id !== selectedEvent.id)); // Elimina del estado local
                        alert('Cita eliminada correctamente');
                    }
                }}
                style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    
                }}
            >
                Eliminar Cita
            </button>
        </div>
    )}
      <button
        onClick={() => setModalOpenIs(false)}  // Cerrar el modal sin eliminar
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Cerrar
      </button>
</Modal>

      <Modal
          isOpen={infoModalIsOpen}
          onRequestClose={closeInfoModal}
        contentLabel="Fin de semana"
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1000',
            borderRadius: '10px',
            padding: '20px',
            width: '80%',
            maxWidth: '400px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: '999',
          },
        }}
        >
          <h2>Información</h2>
          <p>No se pueden seleccionar fechas en fin de semana.</p>
          <button onClick={closeInfoModal}>Cerrar</button>
        </Modal>
    </div>
    </div>
    
  );
};

export default Calendario8;