import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact__options">
                    <div className="contact__mobile">
                        <div className="contact__method">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                            <div className="contact__text">
                                <h3>Call Us Directly At</h3>
                                <a href="tel:+971507728375" target="_blank">
                                    <h2>+971507728375</h2>
                                </a>
                                <a href="tel:+966536279307" target="_blank">
                                    <h2>+966536279307</h2>
                                </a>
                            </div>
                        </div>
                        <div className="contact__method">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            <div className="contact__text">
                                <h3>Email Us At</h3>
                                <a href="mailto:trade@solidtrade.me" target="_blank">
                                    <h2>trade@solidtrade.me</h2>
                                </a>
                            </div>
                        </div>
                        <div className="contact__method">
                            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            <div className="contact__text">
                                <h3>Chat with Our Team</h3>
                                <a href="https://api.whatsapp.com/send/?phone=966536279307&text&type=phone_number&app_absent=0" target="_blank">
                                    <button>Whatsapp</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form>
                        <h3>Get A Quotation!</h3>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="phone" placeholder="Phone" />
                        <textarea type="message" placeholder="Message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
