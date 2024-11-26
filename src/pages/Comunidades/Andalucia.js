import React from 'react'
import Header from '../Header'
import '../Comunidades/Andalucia.css'
import img1 from './img/martin-png.png'
import img2 from './img/David-png.png'
import img3 from './img/Damian.png'
import img4 from './img/Leandro.png'
import img5 from './img/miguel.png'
import img6 from './img/jesus.png'
import img7 from './img/Honorio.png'
import img8 from './img/alex.png'
import Footer from '../Footer'

function Andalucia() {
  return (
    <div className='body'>
      <Header />
      
      <div  className='text2'>
      <a href='djs'><h1>Provincias</h1></a>
      <h2>Andalucia</h2>
      </div>
      <div style={{backgroundColor:'#458884', width:'1500px', marginLeft:'200px', borderRadius:'50px', boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <div className='provincias'>
        <div className='box1'>
          <h1>Almería</h1>
          <div className='fotos'>
          <a href='dj1'><h3>Martín Garcia</h3></a>
          <a href='dj1'><img src={img1} className='img1'/></a>
          
          </div>
        </div>
        <div  className='box1'>
          <h1>Cádiz</h1>
          <div className='fotos'>
          <a href='dj2'><h3>Damián Vazquez</h3></a>
          <a href='dj2'><img src={img3} className='img4'/></a>
          
          </div>
        </div>
        <div className='box1'>
          <h1>Córdoba</h1>
          <div className='fotos'>
          <a href='dj3'><h3>Miguel Morientes</h3></a>
          <a href='dj3'><img src={img5} className='img1'/></a>
          
          </div>
        </div>
        </div>
        <div className='provincias'>
        <div className='box1'>
          <h1>granada</h1>
          <div className='fotos'>
          <a href='dj4'><h3>Julian Sanchez</h3></a>
          <a href='dj4'><img src={img2} className='img0'/></a>
          
          </div>
        </div>
        <div  className='box1'>
          <h1>huelva</h1>
          <div className='fotos'>
          <a href='dj5'><h3>Marcos Ramirez</h3></a>
          <a href='dj5'><img src={img4} className='img3'/></a>
          
          </div>
        </div>
        <div className='box1'>
          <h1>Jaén</h1>
          <div className='fotos'>
          <a href='dj6'><h3>Nestor Gutierrez</h3></a>
          <a href='dj6'><img src={img6} className='img1'/></a>
          
          </div>
        </div>
        </div>
        <div className='provincias'>
        <div className='box1'>
          <h1>málaga</h1>
          <div className='fotos'>
          <a href='dj7'><h3>Alfredo Segura</h3></a>
          <a href='dj7'><img src={img7} className='img1'/></a>
         
          </div>
        </div>
        <div  className='box1'>
          <h1>sevilla</h1>
          <div className='fotos'>
          <a href='dj8'><h3>Roberto Lopez</h3></a>
          <a href='dj8'><img src={img8} className='img1'/></a>
         
          </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Andalucia
