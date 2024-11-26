import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llamada a EmailJS para enviar el correo
    emailjs
      .send(
        'service_ivbjiof', // Aquí va tu service ID de EmailJS
        'template_7amjr52', // Aquí va tu template ID de EmailJS
        formData, // Los datos del formulario
        'hK64FJr7iswhiCnNY' // Aquí va tu user ID de EmailJS
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response);
          // Puedes mostrar un mensaje de éxito al usuario aquí
          alert('¡Tu mensaje ha sido enviado correctamente!');
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          // Muestra un mensaje de error en caso de fallo
          alert('Ocurrió un error al enviar tu mensaje. Intenta nuevamente.');
        }
      );

    // Reiniciar el formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#458884', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="subject">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', height: '150px', resize: 'vertical' }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: '#68aaa7',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))'
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;