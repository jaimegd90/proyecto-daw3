import React from 'react'
import { supabase } from '../SupabaseService'
import { useNavigate } from 'react-router-dom';
import './Perfil.css'
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../supabase/AuthProvider';
import './Perfil.css'
import './Perfil.css'
import Calendario from './calendarios/Calendario'
import Calendario2 from './calendarios/Calendario2'
import Calendario3 from './calendarios/Calendario3'
import Calendario4 from './calendarios/Calendario4'
import Calendario5 from './calendarios/Calendario5'
import Calendario6 from './calendarios/Calendario6'
import Calendario7 from './calendarios/Calendario7'
import Calendario8 from './calendarios/Calendario8'
import img1 from './Comunidades/img/MHIA.png'
import img2 from './Comunidades/img/buddha.jpeg'
import img3 from './Comunidades/img/lumi.jpg'
import img4 from './Comunidades/img/mamba.jpeg'
import img5 from './Comunidades/img/odiseo.jpg'
import img6 from './Comunidades/img/rem.jpg'
import img7 from './Comunidades/img/teatre.jpg'
import img8 from './Comunidades/img/ten.jpg'
import img9 from './Comunidades/img/admin.jpg'

const Perfil = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  }
  
  const { user, setUser } = useAuth();

  return (
    <div className='body000'>
      <Header />

      <div className='text000'>
        <h1>¡BIENVENIDO/A!</h1>
        <h2>{user.email}</h2>
        <div className='carousel000'>
        </div>
        <div className='bolo'>
          {/* Mostrar el calendario correspondiente */}
          {user.email === 'martingarcia@dj.com' && <Calendario />}
          {user.email === 'damianvazquez@dj.com' && <Calendario2 />}
          {user.email === 'miguelmorientes@dj.com' && <Calendario3 />}
          {user.email === 'juliansanchez@dj.com' && <Calendario4 />}
          {user.email === 'marcosramirez@dj.com' && <Calendario5 />}
          {user.email === 'nestorgutierrez@dj.com' && <Calendario6 />}
          {user.email === 'alfredosegura' && <Calendario7 />}
          {user.email === 'robertolopez@dj.com' && <Calendario8 />}
          {user.email === 'mhia@discoteca.com' && <img src={img1} style={{borderRadius:'20px', marginTop:'-80px', width:'400px'}} />}
          {user.email === 'buddha@discoteca.com' && <img src={img2} style={{borderRadius:'20px', marginTop:'-80px', width:'400px'}} />}
          {user.email === 'luminata@discoteca.com' && <img src={img3} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'mamba@discoteca.com' && <img src={img4} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'odiseo@discoteca.com' && <img src={img5} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'rem@discoteca.com' && <img src={img6} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'teatre@discoteca.com' && <img src={img7} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'ten10@discoteca.com' && <img src={img8} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
          {user.email === 'admin@admin.com' && <img src={img9} style={{borderRadius:'20px', marginTop:'-50px', width:'400px'}} />}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Perfil