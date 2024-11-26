import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img1 from '../Comunidades/img/martin-png.png'
import Calendario from '../calendarios/Calendario'

function Dj1() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <h1>martin garcía</h1>
      <h2>dj y productor</h2>
      </div>
      <div className='provincias'>
        <div className='box01'>
          <div className='fotos'>
          <img src={img1} style={{filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))', transition: 'all 0.2s linear'}} />
          <h2>martín garcia es uno de los disck-jokeys más prestigiosos de la zona sur del país. Tras 10 años de carrera, ha conseguido aparecer como cabeza de cartel en varios festivales importantes de toda Andalucia.<br></br>con tan solo 28 años de edad sigue con hambre de seguir despuntando en el mundo del ocio nocturno y hacerse un hueco en el panorama español.<br></br>tras una formación que realizó, ha comenzado a abrir camino tambien en el mundo de la producción.<br></br><br></br>Estilos musicales: Reggaeton, electrónica y pachangueo</h2>
          </div>
        </div>
        </div>
      <Calendario />
      <Footer />
    </div>
  )
}

export default Dj1
