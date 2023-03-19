import React from 'react';

const ContactPhone = ({ location, phone, phoneText }) => {
    return (
        <div className="contact__phone--elem">
            <h6>{location}</h6>
            <a href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`} className="contact__phone">{phoneText}</a>
        </div>
    );
}

export default ContactPhone;
