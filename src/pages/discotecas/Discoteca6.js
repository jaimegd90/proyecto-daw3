import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import img1 from '../Comunidades/img/rem.jpg'
import Maps6 from '../mapas/maps6'

function Discotca6() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <h1>Rem</h1>
      <h2>Sala</h2>
      </div>
      <div className='provincias'>
        <div className='box01'>
          <div className='fotos'>
          <img src={img1} style={{filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))', transition: 'all 0.2s linear', borderRadius:'25px', width:'400px', height:'300px', marginTop: '50px', marginLeft:'-60px'}} />
          <h2>Rem es uno de los pubs mas emblemáticos de la zona sur del país con más de 30 años abierto al publico en general, pero más especificamente para el publico de estilos musicales urbanos, com reggaeton y demás estilos actuales. <br></br>cuenta con la presencia de un personals exquisito. <br></br>no dudes en venir a experimentar una noche llena de emociones y vivencias.<br></br>Siempre buscamos lo mejor para nuestros clientes, por eso te proporcionamos un numero de teléfono para cualquier tipo de consulta u objeción.<br></br><br></br>Estilos musicales pricipales: Reggaeton, electrónica y pachangueo<br></br><br></br>teléfono: 662254877</h2>
          </div>
        </div>
        </div>
        <div style={{marginLeft:'550px', marginBottom:'50px'}}>
      <Maps6 />
      </div>
      <Footer />
    </div>
  )
}

export default Discotca6
