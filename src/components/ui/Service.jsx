import React from 'react';

const Service = ({ num }) => {

    let desc = false
    function showDescription() {

        if (!desc) {
            document.querySelector(`.service__${num}`).classList += " service__para--on"
            desc = true
        }

        else {
            document.querySelector(`.service__${num}`).classList.remove("service__para--on") 
            desc = false
        }
    }

    return (
        <div className={`service service__${num}`}>
            <img src="https://worldsteel.org/wp-content/uploads/steel-tubes.jpg"alt="" />
            <p className="service__para" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusantium labore maiores veritatis. Et quod maiores facere enim ex nostrum.</p>
            <h3>Steel</h3>
            <button onClick={showDescription}>Learn More</button>
        </div>
    );
}

export default Service;
