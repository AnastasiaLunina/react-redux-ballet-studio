import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/icon.png';

import Carousel from './Carousel';
import Cards from './Cards';


import './About.css';
import Staff from './Staff';

const About = () => {
    return (
        <div>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <img src={logo} alt="My logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/classes'>
                        Our classes
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact us
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About us
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Carousel />
            <Cards/>
            <Staff />
        </div>
    );
};

export default About;