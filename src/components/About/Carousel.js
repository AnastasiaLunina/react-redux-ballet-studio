import React, { useState }  from 'react';

import { data } from "./data-about";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './About.css';

const Carousel = () => {
    const [carousel , setCarousel] = useState(0);
    const { description, image} = data[carousel];
  
    const previousPicture = () => {
        setCarousel((carousel => {
        carousel--;
        if (carousel < 0 ) {
          return data.length - 1;
        }
        return carousel;
      }))
    }
  
    const nextPicture = () => {
        setCarousel((carousel => {
        carousel++;
        if (carousel > data.length - 1) {
          return carousel = 0;
        }
        return carousel;
      }))
    }

    return (
        <div className='about-carousel-container'>
            <div className="container-description-container">
                <h2 className="text about-quote">{description}</h2>
            </div>
            <div className="container-img">
                <img className='lookbook-img' src={image} alt="ballet"/>
            </div>

            <div className="container-btn">
                <button className="btn1" onClick={previousPicture}><FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
                <button className="btn2" onClick={nextPicture}><FontAwesomeIcon icon={faArrowLeft} className='arrow'/></button>
            </div>
        </div>
    );
};

export default Carousel;