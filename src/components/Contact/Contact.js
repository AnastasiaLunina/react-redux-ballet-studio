import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

import './Contact.css';

import Navbar from '../Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1200,
  })


const Contact = () => {
    const [state, handleSubmit] = useForm('xpzndrov');

    if (state.succeeded) {
        return (
          <div>
                <Navbar/>
            <div className='thanks-email-container'>
              <p className='thanks-email'>Thanks for joining!</p>
            </div>
          </div>
      );
    }

    return (
        <div>
            <Navbar/>
            <div className='form-container'>
          <form onSubmit={handleSubmit} 
                className='form' >
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='Your e-mail'
            className='text_input email_input'
            required/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}/>
          <textarea
            id="message"
            name="message"
            placeholder='Your message'
            className='text_input msg_input'
            required/>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
          <button type="submit" disabled={state.submitting} className='submit-btn'>
            Submit
          </button>
      </form>
      </div>
        <footer className="site-footer">
        <div className="container">
            <div className="row">
            <div className="contact-wrapper">
                <h6 className="contact-title">Find us here</h6>
                <p className="text-justify">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4012355989375!2d-73.98293908461886!3d40.75319904303093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259003ee9f6fd%3A0x5fd439fd4b4e7107!2s501%205th%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1666470582511!5m2!1sen!2sus" 
                            title="frame1"
                            width="100%" 
                            height="450px" 
                            style={{ border: "0" }}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                    </iframe>
                </p>
            </div>
            <div className="contact-wrapper">
                <h6 className="contact-title">Contact us</h6>
                <ul className="footer-links">
                    <li>Call us to +1(123)456-78-90</li>
                    <li>E-mail us to lorem@ipsum.com</li>
                    <li>Find us in New York, NY 10001</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            </div>
        </div>
        </footer>
        </div>
    );
};

export default Contact;