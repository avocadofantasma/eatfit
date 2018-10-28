import React from 'react'
import './features.css'

const Features = () => {
    return (
        <div className="container">
            <div className="row">
                <FeatureA feat={"Feat 1"} />
                <FeatureB feat={"Feat 2"} />
                <FeatureA feat={"Feat 3"} />
                <FeatureB feat={"Feat 4"} />
            </div>
        </div>
    )
}

const FeatureA = ({ feat }) => {
    return (
        <div className="row">
            <div className="col s12 m4 l4">
                <h5>{feat}</h5>
                <p className="features-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem, perferendis id, delectus doloribus inventore, optio praesentium dolore laborum cumque cupiditate culpa? Sunt facere consequuntur deserunt. Eum rem minima ipsam!</p>
            </div>
            <div className="col s12 m8 l7 offset-l1"><img src="http://via.placeholder.com/735x420" alt="pls" /></div>
        </div>
    )
}

const FeatureB = ({ feat }) => {
    return (
        <div className="row">
            <div className="col s12 m8 l7">
                <img src="http://via.placeholder.com/735x420" alt="pls" />
            </div>
            <div className="col s12 m4 l4  offset-l1">
                <h5>{feat}</h5>
                <p className="features-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem, perferendis id, delectus doloribus inventore, optio praesentium dolore laborum cumque cupiditate culpa? Sunt facere consequuntur deserunt. Eum rem minima ipsam!</p>
            </div>
        </div>
    )
}
export default Features