import React from 'react'
import ModalBottom from '../modal-bottom/modal-bottom';

const TrainingCard = ({ title = 'default title', description = 'default desc', color = 'green', url="" }) => {
    return (
        <div >
            <div className={`strip card-panel ${color} lighten-1`}>
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <ModalBottom title={title}/>
                </div>
            </div>
        </div>
    )
}

export default TrainingCard