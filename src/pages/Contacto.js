import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Formulario from './Formulario'
import './Contacto.css'

function Contacto() {
  return (
      <div className='body1'>
        <Header />
      <div className='text1'>
        <h1>¡contacta con nosotros!</h1>
        <h2>si tienes cualquier tipo de duda o mejora del servicio, no dudes en ponerte en contacto con nosotros a través del siguiente formulario y nos pondremos en contacto lo antes posible </h2>
      </div>
      <div className='form'>
      <Formulario />
      </div>
      <Footer />
    </div>
  )
}

export default Contacto