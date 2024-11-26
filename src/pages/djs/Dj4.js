import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img1 from '../Comunidades/img/David-png.png'
import Calendario4 from '../calendarios/Calendario4'

function Dj1() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <h1>julián sanchez</h1>
      <h2>dj</h2>
      </div>
      <div className='provincias'>
        <div className='box01'>
          <div className='fotos'>
          <img src={img1} style={{marginLeft: '-150px', marginTop:'40px', filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))', transition: 'all 0.2s linear',  width:'500px', height:'300px'}} />
          <h2>julián sanchez es uno de los disck-jokeys más prestigiosos de la zona sur del país. Tras 10 años de carrera, ha conseguido aparecer como cabeza de cartel en varios festivales importantes de toda Andalucia.<br></br>con tan solo 28 años de edad sigue con hambre de seguir despuntando en el mundo del ocio nocturno y hacerse un hueco en el panorama español.<br></br>tras una formación que realizó, ha comenzado a abrir camino tambien en el mundo de la producción.<br></br><br></br>Estilos musicales: Reggaeton, electrónica y pachangueo</h2>
          </div>
        </div>
        </div>
      <Calendario4 />
      <Footer />
    </div>
  )
}

export default Dj1
