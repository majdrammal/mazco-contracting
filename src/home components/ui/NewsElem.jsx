import React from 'react';

const NewsElem = ({ img, title, date, url }) => {
    return (
        <div className="news__elem">
            <img src={img} alt="" className="news__elem--img" />
            <div className="news__elem--text">
                <h2 className="news__elem--title">{title}</h2>
                <p className="news__elem--date">Published {date}</p>
                <a target="_blank" rel="noreferrer" href={url}><button className="news__elem--btn">Read Article</button></a>
            </div>
        </div>
    );
}

export default NewsElem;
