import React, { useEffect } from 'react';
import bg from '../assets/header-bg2.png'

const Header = () => {

    let array = ['deliver', 'manufacture', 'trade']
    let i = 0

    function changeWord() {
        setInterval(function() {
            document.querySelector(".header__slogan").innerHTML = `${array[i % 3]}`
            i++
        }, 2000);
    }

    useEffect(() => {
        changeWord()
    }, [])

    return (
        <div id="header">
            <div className="container">
                {/* <h1><span className="large">Solid</span> Contracting</h1> */}
                {/* <h2 className="header__slogan">We <br/> <span className="red">Trade</span> <br/> Steel</h2> */}
                <h2>We</h2>
                <h2 className="header__slogan">Deliver</h2>
                <h2>Steel</h2>
                {/* <img src={bg} alt="" /> */}
            </div>
        </div>
    );
}

export default Header;

// manufacture steel, trade steel