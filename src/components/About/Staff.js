import React from 'react';
import './About.css';

import heart from '../../assets/img/heart-icon.png';
import person1 from '../../assets/img/alex.jpg';
import person2 from '../../assets/img/jim.jpg';


const Staff = () => {
    return (
        <div className='about-staff-main-container'>
            <div className="about-staff-container">
                <div className="about-staff-card-container">
                    <img src={heart} alt="heart" className="about-staff-icon" data-aos="fade-right" data-aos-delay="1100"/>
                    <h2 className="about-staff-title">Nina Callen</h2>
                    <p className="about-staff-paragraph">From early on, Nina's active imagination and love of fantasy drew her to the world of ballet. Looking back on her childhood, Nina described her passion for ballet accordingly: "I always wanted to dance; from my youngest years...Thus I built castles in the air out of my hopes and dreams</p>
                </div>
                <img src={person1} alt="person" className="about-staff-image" data-aos="fade-left" data-aos-delay="1100"/>
            </div>

            <div className="about-staff-container second">
                <div className="about-staff-card-container ">
                    <img src={heart} alt="heart" className="about-staff-icon" data-aos="fade-right" data-aos-delay="1200"/>
                    <h2 className="about-staff-title">Mira Callen</h2>
                    <p className="about-staff-paragraph">Mira was a prima ballerina. After attending the Ballet School, she made her company debut in 2000 and quickly became a prima ballerina. Her breakthrough performance was in The Swan Lake in 2007, which became her signature role. She joined the Ballet Studio in 2011.</p>
                </div>
                <img src={person2} alt="person" className="about-staff-image" data-aos="fade-left" data-aos-delay="1200"/>
            </div>
            
        </div>
    );
};

export default Staff;