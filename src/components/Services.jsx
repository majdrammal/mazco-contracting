import React from 'react';
import Service from './ui/Service';
import productsData from '../ProductsData'; 

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h2>What We Offer</h2>
                <h3>Products</h3>
                <div className="services__wrapper">
                    {
                        productsData[0].map(product => {
                            return (
                                <Service prod = {product} />
                            )
                        })
                    }
                </div>
                <h3 style={{marginTop: "40px"}}>Services</h3>
                <div className="services__wrapper">
                    {
                        productsData[1].map(product => {
                            return (
                                <Service prod = {product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;
