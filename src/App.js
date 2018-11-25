import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './palette.css'
import './App.css';
//views
import Training from './views/training.js'
import Diet from './views/diet.js'
import Nutrition from './views/nutrition'
import Tips from './views/tips.js'
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
            <Navbar $={window.$} />
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
