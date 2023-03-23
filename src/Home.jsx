import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import logo from './assets/logo.png';
import globe from './assets/globe.png';
import watchroom from './assets/watchroom.PNG'

/* partners */
import emaar from './assets/emaar.png';
import meraas from './assets/meraas.png';
import kamoa from './assets/kamoa.png';
import clab from './assets/clab.png';
import odoo from './assets/odoo.png';
import safco from './assets/safco.png';
import news1 from './assets/news-1.jpeg';
import news2 from './assets/news-2.jpeg';
import news3 from './assets/news-3.jpeg';
import news4 from './assets/news-4.jpeg';
import news5 from './assets/news-5.jpeg';
import map from './assets/map.PNG';
import vid from './assets/vid.mp4'
import SectionCard from './home components/ui/SectionCard';
import NewsElem from './home components/ui/NewsElem';
import ContactPhone from './home components/ui/ContactPhone';
import ContactForm from './home components/ContactForm';

import dlt from './assets/logo-main.png'

const Home = () => {

    const [toggleVid, setToggleVid] = useState(false);

    return (
        <div id="home">
            <nav>
                <div className="nav__container">
                    <img src={logo} alt="" className="nav__logo" />
                    <div className="nav__links">
                        <a href="#" className="nav__link">Home</a>
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
                    <div className="header__text">
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
                    <hr className="black__line" />
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
                    <hr className="black__line" />
                    <div className="sections__cards">
                        <SectionCard 
                            img="https://www.neom.com/content/dam/neom/oxagon/c49/oxagon-main-hero-thumbnail.jpg"
                            title="Real Estate & Construction"
                            sub_title="Neom KSA"
                            para="We supply construction companies with sustainable construction materials, as well as other eco-friendly services to help develop green cities by implementing green systems within smart cities."
                            url="https://www.solidtrade.me"
                        />
                        <SectionCard
                            img="https://gobatroun.com/wp-content/uploads/2022/08/289260407_3254837581464998_1164501426425843060_n.jpg"
                            title="Food & Beverages"
                            sub_title="The Barn"
                            para="With the intention to make healthy eating easier and more accessible, we became co-founders of a healthy restaurant chain, which we intend to develop in more than 60 countries by the end of 2025."  
                            url="https://www.thebarnbeirut.com"
                        />
                        <SectionCard
                            img="https://truxlogistics.co/images/about.webp"
                            title="Logistics"
                            sub_title="Trux Logistics"
                            para="Owning an extensive fleet and a long proven track record in the African market, our African company has taken the decision to shift it's fleet into eco-friendly transport options to minimize the environmental impact of logistics."
                            url="https://www.truxlogistics.co"
                        />
                        <SectionCard
                            img={watchroom}
                            title="Technology"
                            sub_title="Watchroom"
                            para="In an effort to bring people closer together, we are involving ourselves in technological ventures that aim to bridge gaps and enhance connectivity, as well as comfortable living with technologies that improve home automation and energy efficiency."
                            url="https://www.watchroom.tv"
                        />
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
                    <h1 className="partners__title">Our <span className="green">Partners</span></h1>
                    <hr className="black__line" />
                    <div className="partners__list">
                        <div className="partners__upper">
                            <img src={emaar} alt="" className="partner__img" />
                            <img src={meraas} alt="" className="partner__img" />
                            <img src={kamoa} alt="" className="partner__img" />
                        </div>
                        <div className="partners__lower">
                            <img src={clab} alt="" className="partner__img" />
                            <img src={odoo} alt="" className="partner__img" />
                            <img src={safco} alt="" className="partner__img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator">
                <hr className="separator__left" />
                <FontAwesomeIcon className="separator__icon" icon="fa-leaf" />
                <hr className="separator__right" />
            </div>
            <div id="news" className="news">
                <div className="news__container">
                    <h1 className="news__title"><span className="green">Trending</span> News</h1>
                    <hr className="black__line news__line" />
                    <div className="news__list">
                        <NewsElem 
                            img={news1}
                            title="Dubai announces $8.7 trillion economic plan to boost trade, investment and global hub status"
                            date="January 18, 2023"
                            url="https://www.cnbc.com/2023/01/04/dubai-announces-8point7-trillion-economic-plan-to-boost-trade-investment.html"
                        />
                        <NewsElem
                            img={news2}
                            title="NEOM: everything to know about Saudi's futuristic city"
                            date="January 4, 2023"
                            url="https://www.timeoutriyadh.com/attractions/what-is-neom-saudi-arabia"
                        />
                        <NewsElem
                            img={news3}
                            title="How the new future of nutrition puts holistic health first"
                            date="January 13, 2023"
                            url="https://www.weforum.org/agenda/2023/01/davos23-future-of-nutrition-holistic-health/"
                        />
                        <NewsElem
                            img={news4}
                            title="Social Interaction Is Critical for Mental and Physical Health"
                            date="June 12, 2017"
                            url="https://www.nytimes.com/2017/06/12/well/live/having-friends-is-good-for-you.html"
                        />
                        <NewsElem
                            img={news5}
                            title="What is the future of green transport in the supply chain?"
                            date="October 6, 2022"
                            url="https://www.manutan.co.uk/blog/uncategorised/the-future-of-green-transportation-in-the-supply-chain/"
                        />
                    </div>
                </div>
            </div>
            <hr className="ending__line" />
            <div id="contact" className="contact">
                <div className="contact__container">
                    <h1 className="contact__title">Get In Touch</h1>
                        <div className="contact__text">
                            <div className="contact__address">
                                <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/BmYJUqXr3kyPwf5R6"><FontAwesomeIcon className="contact__icon" icon="fa-location-pin" /></a>
                                <h6>Dubai Hills Business Park</h6>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                            <div className="contact__phone">
                                <FontAwesomeIcon className="contact__icon" icon="fa-phone" />
                                <ContactPhone 
                                    location="United Arab Emirates"
                                    phone="971507728375"
                                    phoneText="+971 507 72 8375"
                                />
                                <ContactPhone 
                                    location="Saudi Arabia"
                                    phone="966536279307"
                                    phoneText="+966 53 627 9307"
                                />
                                <ContactPhone 
                                    location="Lebanon"
                                    phone="96171737772"
                                    phoneText="+961 71 737 772"
                                />
                                <ContactPhone 
                                    location="Africa"
                                    phone="243827117555"
                                    phoneText="+243 82 711 7555"
                                />
                            </div>
                            <div className="contact__email">
                                <FontAwesomeIcon className="contact__icon" icon="fa-envelope" />
                                <h6>Solid Trade</h6>
                                <a href="mailto:trade@solidtrade.me" className="contact__email">trade@solidtrade.me</a>
                            </div>    
                        </div>
                        <div className="contact__message">
                            <ContactForm />
                            <div className="map__wrapper">
                                {
                                    !toggleVid ? (
                                        <img className="map__img" src={map} alt="" onMouseEnter={() => setToggleVid(true)}/>
                                    ) : (
                                        <video src={vid} loop autoplay="true" muted onMouseLeave={() => setToggleVid(false)}></video>
                                    )
                                }
                            </div>
                        </div>
                </div>
            </div>
            <footer>
                <div className="footer__container">
                    <a href="#"><img src={logo} alt="" className="footer__logo" /></a>
                    <p className="footer__cr">Copyright &copy; 2023 | Solid Trade </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
