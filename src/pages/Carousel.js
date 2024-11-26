import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './img/David.jpg'
import img2 from './img/Martin.jpg'
import img3 from './img/jaime.jpg'
import './Carousel.css'

const ImageCarousel = () => {
    return (
      <div className='carousel'>
        <Carousel 
            showThumbs={false} 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={3000} 
            showStatus={false}
            dynamicHeight={true}
            width={500}
        >
            <div>
                <img src={img1} alt="Image 1"  className='img2'/>
                
            </div>
            <div>
                <img src={img2} alt="Image 2" />
                
            </div>
            <div>
                <img src={img3} alt="Image 3" />
                
            </div>
        </Carousel>
        </div>
    );
};

export default ImageCarousel;
