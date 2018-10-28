import React, { Component } from 'react';
import './top-dashboard.css';

const TopDashboard = ({ name }) => {
    return (
        <div class="top-dashboard purple darken-1">
            <div class="container white-text">
                <p>{name}</p>
                <p>Mi Progreso</p>
            </div>
        </div>
    );
}

export default TopDashboard;