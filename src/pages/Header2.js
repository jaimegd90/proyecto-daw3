import React from 'react'
import './Header.css'
import img1 from './img/Navbar.png'
  
function Header2() {
  return (
    <div className='header'>
      <div>
        <a href='/'><img src={img1} className='img' /></a>
      </div>
    
    </div>
  )
}

export default Header2