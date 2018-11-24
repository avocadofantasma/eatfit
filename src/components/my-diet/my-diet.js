import React, { Component } from 'react';
import Meals from './meals.js';
import './my-diet.css';

class MyDiet extends Component {
    state = {  }
    render() {
        return (
            <div className="my-diet-container">
                <Meals title="Desayuno"/>
                <Meals title="Comida"/>
                <Meals title="Cena"/>
            </div>
        );
    }
}

export default MyDiet;