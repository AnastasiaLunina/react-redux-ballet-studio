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
                    <p className="about-staff-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, eum! Maiores sit expedita in deserunt aliquam dolore earum rem laboriosam repudiandae dolores unde perferendis voluptate, eveniet reiciendis esse facilis! Eum?</p>
                </div>
                <img src={person1} alt="person" className="about-staff-image" data-aos="fade-left" data-aos-delay="1100"/>
            </div>

            <div className="about-staff-container second">
                <div className="about-staff-card-container ">
                    <img src={heart} alt="heart" className="about-staff-icon" data-aos="fade-right" data-aos-delay="1200"/>
                    <h2 className="about-staff-title">Alexis Callen</h2>
                    <p className="about-staff-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque necessitatibus nam. Est, sint assumenda! Quas magnam vitae eaque sint. Modi porro molestiae, quas id debitis quia impedit quos molestias.</p>
                </div>
                <img src={person2} alt="person" className="about-staff-image" data-aos="fade-left" data-aos-delay="1200"/>
            </div>
            
        </div>
    );
};

export default Staff;