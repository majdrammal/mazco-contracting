import React from 'react';
import Service from './ui/Service';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h2>What We Offer</h2>
                <div className="services__wrapper">
                    <Service /> 
                    <Service /> 
                    <Service /> 
                </div>
            </div>
        </div>
    );
}

export default Services;
