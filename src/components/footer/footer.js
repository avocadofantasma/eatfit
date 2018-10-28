import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <footer className="page-footer dark-primary-color">
                    <div className="container">
                        <div className="row">
                            <Links />
                            <Links />
                            <Links />
                            <Links />
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2018 Telecom
                        </div>
                    </div>
                </footer>

            </div>
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