import React from 'react';

const ModalElement = ({ title = "", icon = "grade", url = '#!', ytLink = "" }) => {
    return (
        <li className="collection-item avatar">
            <a href={`"https://www.youtube.com/${ytLink}`} target="_blank">
                <i className="material-icons circle red">play_arrow</i>
                <h1 className="title">{title}</h1>
                <span href={url} className="secondary-content"><i className="material-icons">{icon}</i></span>
            </a>
        </li>
    );
}

export default ModalElement;