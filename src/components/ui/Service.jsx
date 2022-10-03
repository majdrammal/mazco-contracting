import React from 'react';

const Service = ({ prod }) => {

    let desc = false
    function showDescription() {

        if (!desc) {
            document.querySelector(`.service__${prod?.id}`).classList += " service__para--on"
            desc = true
        }

        else {
            document.querySelector(`.service__${prod?.id}`).classList.remove("service__para--on") 
            desc = false
        }
    }
    
    return (
        <div className={`service service__${prod?.id}`}>
            <img src={prod?.image} alt="" />
            <p className="service__para" >{prod?.description}</p>
            <h3>{prod?.name}</h3>
            <button onClick={showDescription}>Learn More</button>
        </div>
    );
}

export default Service;
