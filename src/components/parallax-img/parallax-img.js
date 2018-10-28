import React, { Component } from 'react'
import $ from 'jquery'

class ParralaxImg extends Component {
    state = {}

    componentDidMount = () => {
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    }

    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src="http://via.placeholder.com/1920x960" alt="parallax" /></div>
                    <h1 className="white-text center-align">CUSTOM TEXT</h1>
                </div>
            </div>
        )
    }
}

export default ParralaxImg;
