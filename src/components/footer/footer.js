import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (
                <footer className="page-footer dark-primary-color">
                    <div className="footer-copyright">
                        <div className="container">
                            © 2018 Fit Eat
                        </div>
                    </div>
                </footer>
        )
    }
}

const Links = () => {
    return (
        <div className="col s12 m3">
            <h5>Links</h5>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
    )
}

export default Footer