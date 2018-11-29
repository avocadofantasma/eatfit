import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
    state = {
        match: {
            url: ""
        }
    }
    componentDidMount = () => {window.$(".button-collapse").sideNav() }
    render() {
        return (
            <div className="">
                <nav>
                    <div className="nav-wrapper white">
                        <div className="container navbar">
                            <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons black-text">menu</i></a>
                            <NavLink to={`${this.state.match.url}/`}>
                                <img src="/logo.jpg" alt="logo" className="responsive-img logo" />
                            </NavLink>
                            <ul className="side-nav black-text" id="mobile-demo">
                                <li>
                                    <div className="user-view no-margin">
                                        <div className="background black">
                                            <img src="/wback.png" className="responsive-img"/>
                                        </div>
                                        <a href="#user"><img className="circle" src="/profile2.jpg" /></a>
                                        <a href="#name"><span className="white-text name">John Doe</span></a>
                                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                                    </div>
                                </li>
                                <li><NavLink to={`${this.state.match.url}/training`}>Entrenamiento</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/diet`} activeClassName='link-active'>Mi dieta</NavLink></li>
                                <li><div className="divider"></div></li>
                                <li><a className="subheader">Nutrición</a></li>
                                <li><NavLink to={`${this.state.match.url}/tips`} activeClassName='link-active'>Tips</NavLink></li>
                                <li><NavLink to={`${this.state.match.url}/nutrition`} activeClassName='link-active'>Nutrición</NavLink></li>
                                <li><div className="divider"></div></li>
                                <li className=""><NavLink to={`${this.state.match.url}/`} className="home-sidenav"><i className="material-icons">home</i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar