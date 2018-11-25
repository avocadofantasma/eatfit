import React from 'react';
import Meal from './meal.js';

const HalfMeal = ({ items }) => {
    return (
        <div className="collection card">
            <ul>
                {
                    items.map((e, i) => <Meal name={e.name} portion={e.portion} />)
                }
            </ul>
        </div>
    );
}

export default HalfMeal;