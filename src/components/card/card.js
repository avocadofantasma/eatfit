import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom'

const Card = ({ title = 'default title', description = 'default desc', color = 'green', url="" }) => {
    return (
        <div>
            <div className={`strip card-panel ${color} lighten-1`}>
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                <NavLink to={url}>
                    <button className="waves-effect waves-light btn"><i className="material-icons right">arrow_forward</i>Ir a {title}</button>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card