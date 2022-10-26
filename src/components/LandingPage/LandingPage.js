import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LandingHeading from '../LandingHeading/LandingHeading';
import Videobackground from '../VideoBackground/Videobackground';
import Navbar from '../Navbar/Navbar';


const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <Navbar/>
            <Outlet/>
            <Videobackground/>
            <LandingHeading/>
            <Footer/>
        </div>
    );
};

export default LandingPage;