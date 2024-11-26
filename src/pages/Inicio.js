import React from 'react'
import Header from './Header'
import './Inicio.css'
import Carousel from './Carousel'
import Footer from './Footer'

function Inicio() {
  return (
    
    <div className='body'>
      <Header />
      <div className='text'>
        <h1>¡BIENVENIDO/A!</h1>
        <h2>A UN NUEVO CONCEPTO DEL OCIO NOCTURNO</h2>
      </div>
      <div className='box'>
        <div>
        <div className='box2'>
          <h2>¿eres <a href='djs' className='enlace'>disc-jokey?</a> ¿Eres dueño de una <a href='discotecas' className='enlace'>discoteca</a> o pub? </h2>
          <p>En esta web podrás encontrar todo lo que buscas sobre el sector del ocio nocturno. Podrás contratar disc-jokeys, así como las discotecas o pubs ofrecerse en el sector. Pensado para dotar de un contacto más simple y sencillo en el mundo del ocio nocturno.<br></br><br></br>Navega por cada una de las paginas de esta web para ver todo el contenido, como la información de cada disc-jokey y de cada discoteca.<br></br><br></br>No dudes en contactar con nosotros para cualquier tipo de duda o mejora del servicio.<br></br><br></br>¡disfruta de este nuevo servicio!</p>
        </div>
        </div>
        <div>
          <Carousel />
        </div>
      </div> 
      
      <Footer />
    </div>
  )
}

export default Inicio

