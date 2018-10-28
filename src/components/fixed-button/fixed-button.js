import React from 'react'
import {Link} from 'react-router-dom'
const FixedButton = () => {
    return (
        <div class="fixed-action-btn horizontal">
            <a class="btn-floating btn-large accent-color">
                <i class="large material-icons">share</i>
            </a>
            <ul>
                <li><Link to={"/"} class="btn-floating red"><i className="material-icons">home</i></Link></li>
                <li><a class="btn-floating green"><i className="material-icons">android</i></a></li>
                <li><a class="btn-floating blue"><i className="material-icons">mail</i></a></li>
            </ul>
        </div>)
}

export default FixedButton