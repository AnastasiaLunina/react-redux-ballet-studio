import React from "react";

import empty from '../../assets/img/heartempty.png';
import heart from '../../assets/img/heart.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1200,
  })


function Toggle({ active, handleChangeActive }) {
  return (
      <div >
        {active ? (<div>
                        <button
                        className='btn btn-like'
                        onClick={() => handleChangeActive()}>
                          <img src={heart} alt='heart' className='img-btn-small' />
                        </button>
                    </div>) 
                : 
                  (<button className='btn btn-like'
                       onClick={() => handleChangeActive()} >
                        <img src={empty} alt='heart' className='img-btn-small'/>
                    </button>)}
      </div>
  );
}

export default Toggle;