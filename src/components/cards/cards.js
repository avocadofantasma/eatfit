import React from 'react'
import './cards.css'
import Card from '../card/card.js'

const Cards = () => {
    return (
        <div class="container offset-top">
            <Card title="Nutrición" description="Consultas nutricionales" color="green"/>
            <Card title="Alimentación" description="Mis planes de alimentación" color="pink"/>
            <Card title="Tips" description="Tips & tricks mejor alimentación" color="blue"/>
            <Card title="Entrenamiento" description="Rutinas / Planes de entrenamiento" color="red"/>
        </div>
    )
}

export default Cards