import React from 'react';
import Service from './ui/Service';

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h2>What We Offer</h2>
                <h3>Products</h3>
                <div className="services__wrapper">
                    <Service num={1} /> 
                    <Service num={2} /> 
                    <Service num={3} /> 
                    <Service num={4} /> 
                    <Service num={5} /> 
                    <Service num={6} /> 
                    <Service num={7} /> 
                    <Service num={8} /> 
                    <Service num={9} /> 
                    <Service num={10} /> 
                    <Service num={11} /> 
                    <Service num={12} /> 
                    <Service num={13} /> 
                    <Service num={14} /> 
                    <Service num={15} /> 
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
