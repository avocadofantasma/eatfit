import React, { Component } from 'react';
import Meal from './meal.js';

class Meals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: this.props.items || []
        }
        // this.state.meals = [...Array(4)].map(() => this.state.meals[0]);
    }

    ComponentDidMount() {
    }

    addMeal() {
        this.setState(prev => prev.meals.push({ name: 'Comida añadida', portion: 3 }));
    }

    render() {
        return (
            <div className="meals card">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>{this.props.title}</h4></li>
                    {
                        this.state.meals.map(e => <Meal name={e.name} portion={e.portion} />)
                    }
                </ul>
            </div>
        );
    }
}

export default Meals;