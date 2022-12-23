import React from 'react';
import logo from '../assets/logo-main.png'

const Footer = () => {
    return (
        <div id="footer">
            <a href="#" className="footer__logo">
                {/* <h1>Solid</h1>
                <div className="footer__logo--bottom">
                    <hr style={{width: "5px"}}/>
                    <hr style={{width: "7.5px"}}/>
                    <hr style={{width: "12.5px"}}/>
                    <hr style={{width: "20px"}}/>
                    <hr style={{width: "25px"}}/>
                    <h6>Trade</h6>
                </div> */}
                <img className="logo" width="60px" height="60px" src={logo} alt="" />
            </a>
            <p>Copyright &copy; 2022 | Solid Trade</p>
        </div>
    );
}

export default Footer;
