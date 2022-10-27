import React from 'react';

import './LandingHeading.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1200,
  })

const LandingHeading = () => {
    return (
        <div className='landing-container'>
                <h1 className="landing-name" 
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    data-aos-offset="0">
                        On The Toes
                </h1>
                <h2 className="landing-heading">Here is the magic of dance, that moment right before you step on stage, the moment where the nerves leave and artist steps into the light.</h2>
        </div>
    );
};

export default LandingHeading;