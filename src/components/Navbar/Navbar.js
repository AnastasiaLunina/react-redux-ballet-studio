// import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/icon.png';

import './Navbar.css';

const Navbar = () => {

    return (
        // <div className='landing-page-container'>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                <img src={logo} alt="My logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/classes'>
                        Classes
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
   
        // </div>
    )
}

export default Navbar;
