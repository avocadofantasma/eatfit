import React from 'react';

const Meal = ({name, portion}) => {
    return (
        <li className="collection-item meal">
            <span className="name">
                {name}
            </span>
            <span href="#!" className="secondary-content">
                {portion} porciones
            </span>
        </li>
    );
}

export default Meal;