import React from 'react'
import './cards.css'
import Card from '../card/card.js'

const Cards = () => {
    return (
        <div className="container offset-top">
            <Card title="Entrenamiento" description="Rutinas / Planes de entrenamiento" color="red" url="training"/>
            <Card title="Alimentación" description="Mis planes de alimentación" color="pink" url="diet"/>
            <Card title="Nutrición" description="Consultas nutricionales" color="green" url="nutrition"/>
            <Card title="Tips" description="Tips & tricks mejor alimentación" color="blue" url="tips"/>
        </div>
    )
}

export default Cards