import React from 'react'
import TrainingCard from '../components/training-card/training-card';

const Training = () => {
    const trainCards = [
        { title: "Principiante", color: "blue", description: "" },
        { title: "Intermedio", color: "purple", description: "" },
        { title: "Avanzado", color: "red", description: "" }
    ]
    return (
        <div>
            <div className="container margin-top">
                {
                    trainCards.map((e, i) => <TrainingCard title={e.title} color={e.color} description={e.description} key={i} />)
                }
            </div>
        </div>
    );
}

export default Training;