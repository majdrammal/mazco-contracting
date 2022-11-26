import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav__title">
                    <h1>Solid</h1>
                    <div className="nav__title--bottom">
                        <hr />
                        <h6>Trade</h6>
                    </div>
                </div>
                <ul className="nav__links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Products</a>
                    <a href="#services_services">Services</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
