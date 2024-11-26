import React, { useEffect } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom';
import { signOut } from '../SupabaseService';
import Header2 from './Header2';
import Login from './LoginEmail';
import './Home.css'
import Footer from './Footer'

const Home = () => {
  
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  }
 

  return (
    <div className='body'>
      <Header2 />
      
      <Login />

      <Footer />
      
    </div>
  )
}

export default Home