import React from 'react';

const SectionCard = ({ img, title, subTitle, para, url }) => {
    return (
        <div className="sections__card">
            <img src={img} alt="" className="sections__card--img" />
            <div className="sections__card--text">
                <h3 className="sections__card--title">{title}</h3>
                <p className="sections__card--sub-title green">{subTitle}</p>
                <p className="sections__card--para">{para}</p>
                <a target="_blank" rel="noreferrer" href={url}><button>Visit</button></a>
            </div>
        </div>
    );
}

export default SectionCard;
