import React from 'react'
import Header from './Header'
import Desplegable2 from './Desplegable2'
import './Discoteca.css'
import Footer from './Footer'

function Discotecas() {
  return (
    <div className='body3'>
      <Header />
      <div className='text3'> 
      <h1>selecciona tu comunidad aútonoma</h1>
      <h2>pincha en el seguiente desplegable, selecciona la comunidad autónoma y te llevará a la página de las discotecas de dicha comunidad</h2>
      </div>
      <div className='desp1'>
      <Desplegable2 />
      </div>
      <Footer />
    </div>
  )
}

export default Discotecas
