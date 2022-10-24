import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/icon.png';

import Footer from '../Footer/Footer';

import './Classes.css';
import data from './data';

const Classes = () => {
    const [classes] = useState(data);
    const [showText, setShowText] = useState(false);
  
    const showTextOnClick = (element) => {
      element.showMore = !element.showMore
      setShowText(!showText)
    }

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
            <div className="container classes-title">
                <h2 className="classes-title" style={{ marginTop: 150 }}>We have classes for everyone. Currently {classes.length} classes avaliable</h2>
            </div>

      {classes.map((element => {
        const { id, title, description, image, price, showMore, classLength, days, hours } = element;
        return(
          <div key={id} className="classes-title">
            <div className="container">
              <h2>{title}</h2>
            </div>
            <div className="container">
              <p className='classes-description'>{showMore ? description : description.substring(0, 220) + "...."}
              <button onClick={() => showTextOnClick(element)}>{showMore ? 'Show less' : 'Show more'}</button>
              </p>
            </div>
            <div className="container">
              <img src={image} width="300px"alt="gift"/>
            </div>
            <div className="container">
                <p>Price / month: {price}</p>
            </div>
            <div className="container">
                <p>Class length: {classLength}</p>
            </div>
            <div className="container">
                <p>Days: {days}</p>
            </div>
            <div className="container">
                <p>Schedule: {hours}</p>
            </div>
          </div>
        )
      }))}
            <Footer />
        </div>
    );
};

export default Classes;