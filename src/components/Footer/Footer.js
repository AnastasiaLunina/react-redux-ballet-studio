import React, { useState } from 'react';

import Toggle from '../Toggle/Toggle';

import './Footer.css';

import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

const Footer = () => {
    const [active, setActive] = useState(false);

    const handleChangeActive = () => {
      setActive((previousStar) => {
        return !previousStar;
      });
    };

    return (
        <div className='bottom-wrapper'>
          <p className="newsletter-sign-made">Made with</p>
          <Toggle active={active} handleChangeActive={handleChangeActive} /> 
          <div className='contact-container'>
            {/* eslint-disable react/jsx-no-target-blank*/}
            <a href="https://github.com/AnastasiaLunina" target='_blank'><img src={github} alt="github" className="newsletter-sign-github" width='30px' height='30px'></img></a>
            <a href="https://www.linkedin.com/in/anastasia-lunina/" target='_blank'><img src={linkedin} alt="linkedin" className="newsletter-sign-linkedin" width='30px' height='30px'></img></a>
          </div>
        </div>
    );
};

export default Footer;