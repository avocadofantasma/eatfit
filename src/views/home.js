import React, { Component } from 'react'

import TopDashboard from "../components/top-dashboard/top-dashboard";
import Cards from '../components/cards/cards.js'

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="">
                <TopDashboard />
                <Cards />
            </div>
        );
    }
}

export default Home;