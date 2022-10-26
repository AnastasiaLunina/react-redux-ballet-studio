import React from 'react';

import Carousel from './Carousel';
import Cards from './Cards';


import './About.css';
import Staff from './Staff';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <Carousel />
            <Cards/>
            <Staff />
        </div>
    );
};

export default About;