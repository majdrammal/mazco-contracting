import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from './assets/logo.png';
import globe from './assets/globe.png';
import watchroom from './assets/watchroom.PNG'

/* partners */
import emaar from './assets/emaar.png';
import meraas from './assets/meraas.jpeg';
import kamoa from './assets/kamoa.jpeg';
import clab from './assets/clab.jpeg';
import odoo from './assets/odoo.jpeg';
import safco from './assets/safco.jpeg';

const Home = () => {
    return (
        <div id="home">
            <nav>
                <div className="nav__container">
                    <img src={logo} alt="" className="nav__logo" />
                    {/* <div className="nav__links">
                        <a href="#home" className="nav__link">Home</a>
                        <a href="#about" className="nav__link">Sections</a>
                        <a href="#about" className="nav__link">About</a>
                    </div> */}
                    {/* <a href="/" className="nav__logo">Solid Trade</a> */}
                    <div className="nav__links">
                        <a href="#home" className="nav__link">Home</a>
                        <a href="#about" className="nav__link">About</a>
                        <a href="#sections" className="nav__link">Sections</a>
                        <a href="#partners" className="nav__link">Partners</a>
                        <a href="#contact" className="nav__link">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="header">
                <div className="header__container">
                    <img src={globe} className="header__img" alt="" />
                    {/* <img src={logo} alt="" className="header__logo" /> */}
                    <div className="header__text">
                        {/* <p className="header__loc green">""</p> */}
                        <h1 className="header__title">
                            <FontAwesomeIcon icon="fa-quote-left" />
                            A healthy trade<br/>Is a <span className="green">Solid Trade</span>
                            <FontAwesomeIcon icon="fa-quote-right" />
                        </h1>
                        <p className="header__sub-title">Dedicated to investing in projects that promote the development of healthy green communities.</p>
                        <a href="#about"><button className="btn-1">About Us</button></a>
                    </div>
                </div>
            </div>
            <div id="about" className="about">
                <div className="about__container">
                    <h1 className="about__title">About <span className="green">Us</span></h1>
                    <p className="about__text">Solid Trade is dedicated to investing in projects that promote the development of healthy green communities. 
We believe that by investing in green projects and supporting healthy eateries, we can have a positive impact on the lifestyle of the communities in which we operate. By focusing on sustainability and environmentally-friendly practices, we strive to build a healthier world for future generations. 
Our commitment to building healthy communities extends beyond just financial investments; we actively seek out opportunities to collaborate with local organizations and community leaders to promote wellness and support initiatives that improve the quality of life for everyone; for corporate social responsibility to sticking to standards that are the closest to being eco-friendly.
At our core, we believe that by working together, we can create a better, healthier world for all.</p>
                </div>
            </div>
            <div className="separator">
                <hr className="separator__left" />
                <FontAwesomeIcon className="separator__icon" icon="fa-leaf" />
                <hr className="separator__right" />
            </div>
            <div id="sections" className="sections">
                <div className="sections__container">
                    <h1 className="sections__title"><span className="green">What</span> We Do</h1>
                    <div className="sections__cards">
                        <div className="sections__card">
                            <img src="https://www.neom.com/content/dam/neom/oxagon/c49/oxagon-main-hero-thumbnail.jpg" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Real Estate & Construction</h3>
                                <p className="sections__card--sub-title green">Neom KSA</p>
                                <p className="sections__card--para">We supply construction companies with sustainable construction materials, as well as other eco-friendly services to help develop green cities by implementing green systems within smart cities.</p>
                                <a target="_blank" href="https://www.solidtrade.me"><button>Visit</button></a>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src="https://gobatroun.com/wp-content/uploads/2022/08/289260407_3254837581464998_1164501426425843060_n.jpg" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">F&B</h3>
                                <p className="sections__card--sub-title green">The Barn</p>
                                <p className="sections__card--para">With the intention to make healthy eating easier and more accessible, we became co-founders of a healthy restaurant chain, which we intend to develop in more than 60 countries by the end of 2025.</p>
                                <a target="_blank" href="https://www.thebarnbeirut.com"><button>Visit</button></a>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src="https://truxlogistics.co/images/about.webp" alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Logistics</h3>
                                <p className="sections__card--sub-title green">Trux Logistics</p>
                                <p className="sections__card--para">Owning an extensive fleet and a long proven track record in the African market, our African company has taken the decision to shift it's fleet into eco-friendly transport options to minimize the environmental impact of logistics.</p>
                                <a target="_blank" href="https://www.truxlogistics.co"><button>Visit</button></a>
                            </div>
                        </div>
                        <div className="sections__card">
                            <img src={watchroom} alt="" className="sections__card--img" />
                            <div className="sections__card--text">
                                <h3 className="sections__card--title">Technology</h3>
                                <p className="sections__card--sub-title green">Watchroom</p>
                                <p className="sections__card--para">In an effort to bring people closer together, we are involving ourselves in technological ventures that aim to bridge gaps and enhance connectivity, as well as comfortable living with technologies that improve home automation and energy efficiency.</p>
                                <a target="_blank" href="https://www.watchroom.tv"><button>Visit</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator">
                <hr className="separator__left" />
                <FontAwesomeIcon className="separator__icon" icon="fa-leaf" />
                <hr className="separator__right" />
            </div>
            <div id="partners" className="partners">
                <div className="partners__container">
                    <h1 className="partners__title">Our Partners</h1>
                    <hr className="partners__line" />
                    <div className="partners__list">
                        <img src={emaar} alt="" className="partner__img" />
                        <img src={meraas} alt="" className="partner__img" />
                        <img src={kamoa} alt="" className="partner__img" />
                        <img src={clab} alt="" className="partner__img" />
                        <img src={odoo} alt="" className="partner__img" />
                        <img src={safco} alt="" className="partner__img" />
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer__container">
                    <img src={logo} alt="" className="footer__logo" />
                    <p className="footer__cr">Copyright &copy; 2023 | Solid Trade </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
