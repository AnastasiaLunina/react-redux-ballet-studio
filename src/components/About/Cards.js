import React from 'react';

import ballerina from '../../assets/img/color.png'
import strength from '../../assets/img/strength.png'
import hand from '../../assets/img/hand.png'

const Cards = () => {
    return (
        <div className="about-cards-main-container">
            <div className="about-cards-container first" data-aos="fade-right" data-aos-delay="500">
                <img src={ballerina} alt="ballerina" className="about-image" />
                <p className="about-paragraph">We believe that all students will benefit from the study of ballet, and that professional ballet training need not be for the select few.  We provide a solid foundation in ballet training that works for all ages, backgrounds, and levels of ability.</p>
            </div>
            <div className="about-cards-container" data-aos="fade-up" data-aos-delay="800">
                <img src={strength} alt="strength" className="about-image" />
                <p className="about-paragraph">Understanding how turnout works in each position is essential to any dancer, no matter what style you do. Discover where your true turnout muscles really are and how to use them "as little as possible, as much as necessary" to gain awesome control of rotation yet maintain your mobility too.</p>
            </div>
            <div className="about-cards-container" data-aos="fade-left" data-aos-delay="1100">
                <img src={hand} alt="hand" className="about-image" />
                <p className="about-paragraph">Ballet is an art form created by the movement of the human body. It is theatrical – performed on a stage to an audience utilizing costumes, scenic design and lighting. It can tell a story or express a thought, concept or emotion. Ballet dance can be magical, exciting, provoking or disturbing.</p>
            </div>
        </div>
    );
};

export default Cards;