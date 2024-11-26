import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmail } from '../SupabaseService';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useAuth } from '../supabase/AuthProvider';
import './LoginEmail.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const handleSubmit = async (e) => {

    <div>
      <Header />
    </div>
    
    e.preventDefault();
    try {
      const user = await signInWithEmail(email, password);
      if (user) {
        setSuccess('Usuario logueado correctamente.');
        setError(null);

        setTimeout(() => {
          navigate('/perfil');
        }, 2000);
      }
    } catch (error) {
      setError(error.message);
      setSuccess(null);
    }
  };

  return (
    <div className='body'>
    <div style={styles.container}>
    <div className='login'>
    <h1>Inicia sesión para acceder al mejor contenido del ocio nocturno</h1>
    <h2>Si no tienes un usuario ya creado previamente, te invitamos a que te lo crees gratuitamente</h2>
    </div>
    <h2 style={styles.title}>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
      <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
         <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Iniciar Sesión</button>
      </form>
      {success && <p style={styles.success}>{success}</p>}
      {error && <p style={styles.error}>{error}</p>}
      <h3>¿no tienes usuario creado? <Link to={"/signup"} style={styles.register}>Crea un usuario aquí</Link></h3>
    </div>
    </div>
  );
  
};


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

export default Login;
