import React from 'react'
import './cards.css'
import Card from '../card/card.js'

const Cards = () => {
    const cards = [
        { title: "Entrenamiento", description: "Rutinas / Planes de entrenamiento", url: "training", bg: "bg-workout"},
        { title: "Alimentación", description: "Mis planes de alimentación", url: "diet", bg: "diet-bg" },
        { title: "Nutrición", description: "Consultas nutricionales", url: "nutrition", bg: "nutrition-bg" },
        { title: "Tips", description: "Tips & tricks mejor alimentación", url: "tips", bg: "tips-bg" },
    ];

    return (
        <div className="container offset-top">
            {
                cards.map((e, i) => <Card title={e.title} description={e.description} key={i} url={e.url} bg={`${e.bg} card-menu`}/>)
            }
        </div>
    )
}

export default Cards