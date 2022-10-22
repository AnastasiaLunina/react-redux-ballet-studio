import React from 'react';
import video from '../../assets/video/background.mp4'

import './Videobackground.css';

const Videobackground = () => {
    return (
        <div className='background-video-container'>
            <video autoPlay muted loop className='background-video'>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Videobackground;