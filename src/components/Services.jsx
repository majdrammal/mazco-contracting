import React from 'react';
import Service from './ui/Service';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h2>What We Offer</h2>
                <h3>Products</h3>
                <div className="services__wrapper">
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                </div>
                <h3 style={{marginTop: "40px"}}>Services</h3>
                <div className="services__wrapper">
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                    <Service /> 
                </div>
            </div>
        </div>
    );
}

export default Services;
