import React from 'react'
import Header from '../Header'
import '../Comunidades/Andalucia.css'
import img1 from './img/martin-png.png'
import img2 from './img/David-png.png'
import img3 from './img/Damian.png'
import img4 from './img/Leandro.png'
import img5 from './img/miguel.png'
import img6 from './img/jesus.png'
import Footer from '../Footer'

function Valenciana() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <a href='djs'><h1>Provincias</h1></a>
      <h2>Com. valenciana</h2>
      </div>
      <div style={{backgroundColor:'#458884', width:'1650px', paddingRight:'60px', marginLeft:'90px', borderRadius:'50px', boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <div className='provincias'>
        <div className='box1'>
          <h1>Alicante</h1>
          <div className='fotos'>
          
          <a href='dj4'><h3>Julián sanchez</h3></a>
          <a href='dj4'><img src={img2} className='img0'/></a>
          
          </div>
        </div>
        <div  className='box1'>
          <h1>Castellón</h1>
          <div className='fotos'>
          <a href='dj2'><h3>Damián Vazquez</h3></a>
          <a href='dj2'><img src={img3} className='img4'/></a>
          
          </div>
        </div>
        
        </div>
        <div className='provincias'>
        <div className='box1'>
          <h1>Valencia</h1>
          <div className='fotos'>
          <a href='dj3'><h3>Miguel Morientes</h3></a>
          <a href='dj3'><img src={img5} className='img1'/></a>
          
          </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Valenciana
