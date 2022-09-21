import React from 'react';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav__title">
                    <h1>Solid</h1>
                    <h6>Contracting</h6>
                </div>
                <ul>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Project</a>
                    <a href="#contact">Contact</a>
                    <h4>XX X XX</h4>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
