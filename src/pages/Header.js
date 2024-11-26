import React from 'react'
import { supabase } from '../SupabaseService'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import img1 from './img/Navbar.png'
import { useAuth } from '../supabase/AuthProvider';


const Header = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  }
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirige al usuario al inicio
  };

  const handleProtectedNavigation = (path) => {
    if (!user) {
      alert('Por favor, inicia sesión para acceder a esta página.');
      navigate('/'); // Redirige a Home
    } else {
      navigate(path); // Navega a la ruta protegida
    }
  };
  

  return (
    <div className='header'>
        <div>
        <a href='inicio'><img src={img1} className='img' /></a>
        </div>

        <div className='inicio'>
          <a href='/inicio'>Inicio</a>
          <a onClick={() => handleProtectedNavigation('/djs')}>Djs</a>
          <a onClick={() => handleProtectedNavigation('/discotecas')}>Discotecas</a>
          <a onClick={() => handleProtectedNavigation('/contacto')}>Contacto</a>
          </div>
          <div className='cierre'>
      {user ? (
        <>
          <a href='/perfil'><p style={{color:'white', fontSize:'20px'}}>Bienvenido, {user.email}</p></a>
          <button href='/' style={{backgroundColor: '#68aaa7', color:'white', fontSize:'20px', marginTop:'-10px', textDecoration:'none'}} onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <a href='/'onClick={handleButtonClick} style={{backgroundColor: '#458884', border: 'none', color:'white', fontSize:'25px', textDecoration:'none'}}>Inicia Sesión</a>
      )}
      </div>
      
    </div>
  )
}

export default Header