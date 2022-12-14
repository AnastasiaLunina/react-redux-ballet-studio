import React, { useState } from 'react';

import './Classes.css';
import data from './data';
import Particle from '../Particle/Particle';

import Navbar from '../Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1200,
  })

const Classes = () => {
    const [classes] = useState(data);
    const [showText, setShowText] = useState(false);
  
    const showTextOnClick = (element) => {
      element.showMore = !element.showMore
      setShowText(!showText)
    }

    return (
        <div>
        <div className='classes-main-wrapper'>
            <Navbar/>
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
              <button onClick={() => showTextOnClick(element)} className='show-more-button'>{showMore ? 'Show less' : 'Show more'}</button>
              </p>
            </div>
            <div className="photo-description-container">
                <div className="container">
                <img src={image} width="500px"alt="ballet" className='classes-image'/>
                </div>
                <ul className="description-inner-container container-price">
                    <ul className="container-price">
                        <ul className="container-price"><span className="classes-span">Price: </span> 
                            <li><span className="">One lesson:</span> ${price.oneLesson}</li>
                            <li><span className="">Monthly / 1 hour:</span> ${price.hourly}</li>
                            <li><span className="">Monthly / 1.5 hours:</span> ${price.hourAndHalf}</li>
                            <li><span className="">Yearly:</span> ${price.annualy}</li>
                            <li><span className="">Private class:</span> ${price.private}</li>
                        </ul>
                    </ul>
                    <li className=""><span className="classes-span">Class length:</span> 
                         {classLength}
                    </li>
                    <li className=""><span className="classes-span">Days: </span> 
                        {days}
                    </li>
                    <li className=""><span className="classes-span">Schedule:</span> 
                         {hours}
                    </li>
                </ul>
            </div>
          </div>
        )
      }))}
      </div>
      <Particle />
    </div>
    );
};

export default Classes;