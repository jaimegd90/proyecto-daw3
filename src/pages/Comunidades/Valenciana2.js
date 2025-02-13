import React from 'react'
import Header from '../Header'
import '../Comunidades/Andalucia.css'
import img1 from './img/mamba.jpeg'
import img3 from './img/MHIA.png'
import img5 from './img/lumi.jpg'
import Footer from '../Footer'

function Valenciana2() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <a href='discotecas'><h1>Provincias</h1></a>
      <h2>Com. valenciana</h2>
      </div>
      <div style={{backgroundColor:'#458884', width:'1650px', paddingRight:'60px', marginLeft:'90px', borderRadius:'50px', boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <div className='provincias'>
        <div className='box1'>
          <h1>Alicante</h1>
          <div className='fotos'>
          <a href='discoteca1'><h3>la mamba negra</h3></a>
          <a href='discoteca1'><img src={img1} className='img00'/></a>
          
          </div>
        </div>
        <div  className='box1'>
          <h1>Castellón</h1>
          <div className='fotos'>
          <a href='discoteca2'><h3>mhia</h3></a>
          <a href='discoteca2'><img src={img3} className='img01'/></a>
          
          </div>
        </div>
        
        </div>
        <div className='provincias'>
        <div className='box1'>
          <h1>Valencia</h1>
          <div className='fotos'>
          <a href='discoteca3'><h3>luminata</h3></a>
          <a href='discoteca3'><img src={img5} className='img00'/></a>
          
          </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Valenciana2
