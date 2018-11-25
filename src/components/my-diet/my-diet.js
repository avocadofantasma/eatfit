import React, { Component } from 'react';
import Meals from './meals.js';
import HalfMeal from './half-meal.js';
import './my-diet.css';
import 'materialize-css/js/tabs.js';
import 'materialize-css/js/carousel.js';

class MyDiet extends Component {
    state = {
        weekly: [
            {
                day: "L", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "M", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "M", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "J", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "V", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "S", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
            {
                day: "D", diet: {
                    halfMealItems: [
                        { name: "fruta", portion: 2 },
                        { name: "verdura", portion: 4 }
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
            },
        ],
    }
    componentDidMount() {
        window.$('.tabs').tabs({ swipeable: true , height: "88em"});
    }
    render() {
        return (
            <div className="my-diet-container">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            {
                                this.state.weekly.map((e, i) => <li className="tab col s3"><a href={`#day-${i}`}>{e.day}</a></li>)
                            }
                        </ul>
                    </div>
                    {
                        this.state.weekly.map((e, i) => {
                            debugger;
                            return <div id={`day-${i}`} className="col s12">
                                <Meals title="Desayuno" items={e.diet.desayuno} />
                                <HalfMeal items={e.diet.halfMealItems} />
                                <Meals title="Comida" items={e.diet.comida} />
                                <HalfMeal items={e.diet.halfMealItems} />
                                <Meals title="Cena" items={e.diet.cena} />
                            </div>
                        })
                    }
                </div>

            </div>
        );
    }
}

export default MyDiet;