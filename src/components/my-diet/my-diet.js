import React, { Component } from 'react';
import Meals from './meals.js';
import HalfMeal from './half-meal.js';
import './my-diet.css';
import 'materialize-css/js/tabs.js';
import 'materialize-css/js/carousel.js';
import demoDiet from './dietExample.js';

class MyDiet extends Component {
    state = {
        weekly: demoDiet
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
                            return <div id={`day-${i}`} className="col s12">
                                <Meals title="Desayuno" items={e.diet.breakfast} />
                                <HalfMeal items={e.diet.halfMealA} />
                                <Meals title="Comida" items={e.diet.lunch} />
                                <HalfMeal items={e.diet.halfMealB} />
                                <Meals title="Cena" items={e.diet.dinner} />
                            </div>
                        })
                    }
                </div>

            </div>
        );
    }
}

export default MyDiet;