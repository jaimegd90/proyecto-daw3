import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../SupabaseService';
import Header2 from './Header2';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/login');}
  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Registrado correctamente')
      navigate('/');

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    
    
      
    <div className='body'>
      <Header2 />
      <div style={styles.container}>
      <div className='login'>
      <h1>Crea un usuario para acceder al mejor contenido del ocio nocturno</h1>
      <h2>Si lo tienes ya creado previamente, te invitamos a que inicies sesión</h2>
      </div>
      <h2 style={styles.title}>Crear usuario</h2>
      <form onSubmit={handleSubmit}  style={styles.form}>
        <input 
          placeholder='nombre'
          name='fullName'
          onChange={handleChange}
          style={styles.input}
        />

        <input 
          placeholder='Correo electrónico'
          name='email'
          onChange={handleChange}
          style={styles.input}
        />

        <input 
          placeholder='contraseña'
          name='password'
          type="password"
          onChange={handleChange}
          style={styles.input}
        />

        <button type='submit' style={styles.button}>
          Crear
        </button>

        <h3>¿tienes ya usuario creado? <Link to={"/"} style={styles.register}>Inicia sesión aquí</Link></h3>

      </form>
      
    </div>
    <Footer />
    </div>
    
  )
}


// Estilos en línea para simplificar el ejemplo
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '79vh',
  },
  register: {
    color: '#000000'
  },
  title: {
    fontSize: '30px',
    color: '#333',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#458884',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },

  toggleButton: {
    marginTop: '10px',
    fontSize: '20px',
    color: '#000000',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },

  error: {
    color: 'red',
    marginTop: '10px',
    
  },
  success: {
    color: 'green',
    marginTop: '10px',
  }
};

export default SignUp