import React from 'react'
import Header from './Header'
import Desplegable from './Desplegable'
import './Djs.css'
import Footer from './Footer'

function Djs() {
  return (
    <div className='body3'>
      <Header />
      <div className='text3'> 
      <h1>selecciona tu comunidad aútonoma</h1>
      <h2>pincha en el seguiente desplegable, selecciona la comunidad autónoma y te llevará a la página de los disc-jokeys de dicha comunidad</h2>
      </div>
      <div className='desp1'>
      <Desplegable />
      </div>
      <Footer />
    </div>
  )
}

export default Djs
