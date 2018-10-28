import React, { Component } from 'react'
import $ from 'jquery'

class Slider extends Component {
    state = {}
    componentDidMount = () => $('.carousel.carousel-slider').carousel({ fullWidth: true })

    render() {
        return (
            <div className="row">
                <div className="carousel carousel-slider" data-indicators="true">
                    <div className="carousel-fixed-item center">
                        <a className="btn btn-large waves-effect  dark-primary-color white-text ">Botón <i className="material-icons right">shopping_cart</i></a>
                    </div>
                    {getSliders().map(src => <SliderItem src={src} />)}
                </div>
            </div>
        );
    }
}

const getSliders = () => {
    let arr = ["http://via.placeholder.com/1920x480"]
    for (let i = 2; i < 5; i++)
        arr.push(`https://lorempixel.com/1920/1080/food/${i}`)
    return arr
}

const SliderItem = ({ src }) => {
    return (
        <a className="carousel-item" href="#!"><img src={src} alt={src.toString()} /></a>
    )
}
export default Slider;

