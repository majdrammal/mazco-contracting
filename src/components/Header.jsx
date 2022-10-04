import React, { useEffect, useState } from 'react';

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
                <div className="left">
                    {/* <h1><span className="large">Solid</span> Contracting</h1> */}
                    {/* <h2 className="header__slogan">We <br/> <span className="red">Trade</span> <br/> Steel</h2> */}
                    <h2>We</h2>
                    <h2 className="header__slogan">Deliver</h2>
                    <h2>Steel</h2>
                    {/* <img src={bg} alt="" /> */}
                </div>
                <div className="right">
                    <h3>We Specialize In</h3>
                    <p>
                        trading and manufacturing steel, as well as supplying specialized services in contracting and the delivery of steel products to contstruction sites.
                    </p>
                    <a href="#about">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default Header;