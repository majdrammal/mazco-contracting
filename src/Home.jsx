import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from './assets/logo.png';
import globe from './assets/globe.png';
import watchroom from './assets/feechTV.jpg'

const Home = () => {
    return (
        <div id="home">
            <nav>
                <div className="nav__container">
                    <div className="nav__links">
                        <a href="#home" className="nav__link">Home</a>
                        <a href="#about" className="nav__link">Sections</a>
                        <a href="#about" className="nav__link">About</a>
                    </div>
                    <img src={logo} alt="" className="nav__logo" />
                    {/* <a href="/" className="nav__logo">Solid Trade</a> */}
                    <div className="nav__links">
                        <a href="#home" className="nav__link">Home</a>
                        <a href="#about" className="nav__link">Sections</a>
                        <a href="#about" className="nav__link">About</a>
                    </div>
                </div>
            </nav>
            <div className="header">
                <div className="header__container">
                    <img src={globe} className="header__img" alt="" />
                    {/* <img src={logo} alt="" className="header__logo" /> */}
                    <div className="header__text">
                        <p className="header__loc green">Dubai</p>
                        <h1 className="header__title">A healthy trade<br/>Is a <span className="green">Solid Trade</span></h1>
                        <p className="header__sub-title">Dedicated to investing in projects that promote the development of healthy green communities.</p>
                        <button className="btn-1">About Us</button>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="about__container">
                    <h1 className="about__title">About <span className="">Us</span></h1>
                    <p className="about__text">Solid Trade is dedicated to investing in projects that promote the development of healthy green communities. 
We believe that by investing in green projects and supporting healthy eateries, we can have a positive impact on the lifestyle of the communities in which we operate. By focusing on sustainability and environmentally-friendly practices, we strive to build a healthier world for future generations. 
Our commitment to building healthy communities extends beyond just financial investments; we actively seek out opportunities to collaborate with local organizations and community leaders to promote wellness and support initiatives that improve the quality of life for everyone; for corporate social responsibility to sticking to standards that are the closest to being eco-friendly.
At our core, we believe that by working together, we can create a better, healthier world for all.</p>
                </div>
            </div>
            <div className="sections">
                <div className="sections__container">
                    <div className="separator">
                        <hr className="separator__left" />
                        <FontAwesomeIcon className="separator__icon" icon="fa-leaf" />
                        <hr className="separator__right" />
                    </div>
                    <h1 className="sections__title"><span className="green">What</span> We Do</h1>
                    <div className="sections__cards">
                        <div className="sections__card">
                            <img src="https://www.neom.com/content/dam/neom/oxagon/c49/oxagon-main-hero-thumbnail.jpg" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Construction</h3>
                                <p className="sections__card--sub-title green">Neom KSA</p>
                                <p className="sections__card--para">construction of green cities supplying construction material and implementing green systems within smart cities etc</p>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src="https://gobatroun.com/wp-content/uploads/2022/08/289260407_3254837581464998_1164501426425843060_n.jpg" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">F&B</h3>
                                <p className="sections__card--sub-title green">The Barn</p>
                                <p className="sections__card--para">construction of green cities supplying construction material and implementing green systems within smart cities etc</p>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src="https://truxlogistics.co/images/about.webp" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Logistics</h3>
                                <p className="sections__card--sub-title green">Trux Logistics</p>
                                <p className="sections__card--para">construction of green cities supplying construction material and implementing green systems within smart cities etc</p>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src={watchroom} alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Technology</h3>
                                <p className="sections__card--sub-title green">Watchroom</p>
                                <p className="sections__card--para">construction of green cities supplying construction material and implementing green systems within smart cities etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
