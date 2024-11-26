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

function Cataluña() {
  return (
    <div className='body'>
      <Header />
      <div  className='text2'>
      <a href='djs'><h1>Provincias</h1></a>
      <h2>Cataluña</h2>
      </div>
      <div style={{backgroundColor:'#458884', width:'1650px', paddingRight:'60px', marginLeft:'90px', borderRadius:'50px', boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <div className='provincias'>
        <div className='box1'>
          <h1>Barcelona</h1>
          <div className='fotos'>
          
          <a href='dj4'><h3>Julián sanchez</h3></a>
          <a href='dj4'><img src={img2} className='img0'/></a>
          </div>
        </div>
        <div  className='box1'>
          <h1>gerona</h1>
          <div className='fotos'>
          <a href='dj5'><h3>marcos ramirez</h3></a>
          <a href='dj5'><img src={img4} className='img3'/></a>
          
          </div>
        </div>
        <div className='box1'>
          <h1>lérida</h1>
          <div className='fotos'>
          
          <a href='dj3'><h3>Miguel Morientes</h3></a>
          <a href='dj3'> <img src={img5} className='img1'/></a>
          </div>
        </div>
        </div>
        <div className='provincias'>
        <div className='box1'>
          <h1>tarragona</h1>
          <div className='fotos'>
          <a href='dj1'><h3>Martín Garcia</h3></a>
          <a href='dj1'><img src={img1} className='img1'/></a>
          
          </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cataluña
