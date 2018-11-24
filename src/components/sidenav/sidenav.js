import React, { Component } from 'react';

class Sidenav extends Component {
    state = {  }
    componentDidMount = () => { 
        //debugger;
        //this.props.$('.sidenav').sideNav(); 
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo"><img src="https://lh5.googleusercontent.com/gA3DhYm0oI8ezF54z15xsfqj-HC3lRFhMeT1Bl29R2-9RbDk8e_n5MQ3MW1fe5Kou1S83V1RRMtH9_t1N9aL=w1920-h888-rw" alt="" srcset=""/></a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
        </div>
        );
    }
}

export default Sidenav;