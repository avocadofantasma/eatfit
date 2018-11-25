import React from 'react'
import Card from "../components/card/card";
import TrainingCard from '../components/training-card/training-card';

const Training = () => {
    return (
        <div>
            <div className="container margin-top">
                <TrainingCard title="Principiante" color="blue"/>
                <TrainingCard title="Intermedio" color="purple"/>
                <TrainingCard title="Avanzado" color="red"/>
            </div>
        </div>
    );
}

export default Training;