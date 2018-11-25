import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import $ from 'jquery'
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';
import 'materialize-css/js/tabs';
import './palette.css'
import './App.css';
//views
import AboutUs from './views/about-us.js'
import Training from './views/training.js'
import Diet from './views/diet.js'
import Nutrition from './views/nutrition'
import Tips from './views/tips.js'
import Carriers from './views/carriers.js'
import ContactUs from './views/contact-us.js'
import Enterprises from './views/enterprises.js'
import Packages from './views/packages.js'
import PublicSector from './views/public-sector.js'
import Home from './views/home.js';
import NotFound from './components/404/404.js'

import FixedButton from './components/fixed-button/fixed-button.js'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div >
            <Navbar $={$} />
            <div className="main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/training" component={Training} />
                <Route path="/nutrition" component={Nutrition} />
                <Route path="/tips" component={Tips} />
                <Route path="/diet" component={Diet} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <FixedButton />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
