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

export default Footer