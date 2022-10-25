import React from 'react';

import ballerina from '../../assets/img/color.png'
import strength from '../../assets/img/strength.png'
import hand from '../../assets/img/hand.png'

const Cards = () => {
    return (
        <div className="about-cards-main-container">
            <div className="about-cards-container first" data-aos="fade-right" data-aos-delay="500">
                <img src={ballerina} alt="ballerina" className="about-image" />
                <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eaque. Quos eveniet quibusdam officia at ipsa, natus autem magni consequuntur distinctio commodi pariatur inventore nulla exercitationem. Id aliquid cupiditate aliquam.</p>
            </div>
            <div className="about-cards-container" data-aos="fade-up" data-aos-delay="800">
                <img src={strength} alt="strength" className="about-image" />
                <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eaque. Quos eveniet quibusdam officia at ipsa, natus autem magni consequuntur distinctio commodi pariatur inventore nulla exercitationem. Id aliquid cupiditate aliquam.</p>
            </div>
            <div className="about-cards-container" data-aos="fade-left" data-aos-delay="1100">
                <img src={hand} alt="hand" className="about-image" />
                <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eaque. Quos eveniet quibusdam officia at ipsa, natus autem magni consequuntur distinctio commodi pariatur inventore nulla exercitationem. Id aliquid cupiditate aliquam.</p>
            </div>
        </div>
    );
};

export default Cards;