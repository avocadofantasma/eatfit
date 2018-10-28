import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom'

const Card = ({ title = 'default title', description = 'default desc', color = 'green', url="" }) => {
    return (
        <div>
            <div class={`strip card-panel ${color} lighten-1`}>
                <div class="card-content white-text">
                    <span class="card-title">{title}</span>
                    <p>{description}</p>
                </div>
                <div class="card-action">
                <NavLink to={url}>
                    <a class="waves-effect waves-light btn"><i class="material-icons right">arrow_forward</i>Ir a {title}</a>
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card