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
                    Company Name
            </h1>
            <h2 className="landing-heading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minima libero vel repellendus architecto harum nesciunt modi alias? Esse accusamus odit eveniet, nesciunt quod illum minima ipsa odio perspiciatis nemo!</h2>
        </div>
    );
};

export default LandingHeading;