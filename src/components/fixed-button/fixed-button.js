import React from 'react'

const FixedButton = () => {
    return (
        <div className="fixed-action-btn horizontal">
            <a className="btn-floating btn-large accent-color">
                <i className="large material-icons">share</i>
            </a>
            <ul>
                <li><a className="btn-floating blue"><img src="/fb.svg" alt="fb" srcset=""/></a></li>
            </ul>
        </div>)
}

export default FixedButton