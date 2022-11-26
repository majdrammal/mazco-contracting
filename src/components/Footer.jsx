import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer__logo">
                <h1>Solid</h1>
                <div className="footer__logo--bottom">
                    <hr/>
                    <h6>Trade</h6>
                </div>
            </div>
            <p>Copyright &copy; 2022 | Solid Trade</p>
        </div>
    );
}

export default Footer;
