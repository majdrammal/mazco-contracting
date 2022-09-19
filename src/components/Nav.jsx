import React from 'react';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <img src={logo} alt="" />
                <ul>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
