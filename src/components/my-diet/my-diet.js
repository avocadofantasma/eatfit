import React, { Component } from 'react';
import Meals from './meals.js';
import HalfMeal from './half-meal.js';
import './my-diet.css';

class MyDiet extends Component {
    state = { 
        halfMealItems: [
            {name: "fruta", portion: 2},
            {name: "verdura", portion: 4}
        ],
        desayuno: [
            { name: 'Huevo', portion: '4' },
            { name: 'Leche', portion: '2' }
        ],
        comida: [
            { name: 'Pechuga pollo', portion: '8' },
            { name: 'Lechuga', portion: '8' },
            { name: 'Jitomate', portion: '5' }
        ],
        cena: [
            { name: 'Queso cottage', portion: '1' },
            { name: 'Pan intengral', portion: '1' },
            { name: 'Aguacate', portion: '2' },
        ]
    }

    render() {
        return (
            <div className="my-diet-container">
                <Meals title="Desayuno" items={this.state.desayuno}/>
                <HalfMeal items={this.state.halfMealItems}/>
                <Meals title="Comida" items={this.state.comida}/>
                <HalfMeal items={this.state.halfMealItems}/>
                <Meals title="Cena" items={this.state.cena}/>
            </div>
        );
    }
}

export default MyDiet;