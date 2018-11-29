import React from 'react';
import './top-dashboard.css';

const TopDashboard = ({ name }) => {
    return (
        <div className="top-dashboard purple darken-1">
            <div className="container white-text">
                <p>{name}</p>
                <p>Mi Progreso</p>
            </div>
        </div>
    );
}

export default TopDashboard;