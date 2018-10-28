import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        match: {
            url: ""
        }
    }
    componentDidMount = () => { this.props.$(".button-collapse").sideNav() }
    render() {
        return (
            <div className="">
                <nav>
                    <div className="nav-wrapper default-primary-color">
                        <div className="container navbar">
                            <img src="http://via.placeholder.com/150x64" alt="logo" className="left responsive-img hide-on-med-and-down" />
                            <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons black-text">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to={`${this.state.match.url}/`} ><i className="material-icons">home</i></NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/about-us`} activeClassName='link-active'>About us</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/enterprises`} activeClassName='link-active'>Empresas<i className="material-icons right">business</i></NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/contact-us`} activeClassName='link-active'>Contact us <i className="material-icons right">email</i></NavLink></li>
                            </ul>
                            <ul className="side-nav black-text" id="mobile-demo">
                                <li><NavLink to={`${this.state.match.url}/`}><i className="material-icons">home</i></NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/about-us`}>About us</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/enterprises`} activeClassName='link-active'>Empresas<i className="material-icons right">business</i></NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/contact-us`} activeClassName='link-active'>Contact us <i className="material-icons right">email</i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar