import React from 'react'
import './card.css'

const Card = ({ title = 'default title', description = 'default desc', color = 'green' }) => {
    return (
        <div>
            <div class={`strip card-panel ${color} lighten-1`}>
                <div class="card-content white-text">
                    <span class="card-title">{title}</span>
                    <p>{description}</p>
                </div>
                <div class="card-action">
                    <a class="waves-effect waves-light btn"><i class="material-icons right">arrow_forward</i>Ir a {title}</a>
                </div>
            </div>
        </div>
    )
}

export default Card