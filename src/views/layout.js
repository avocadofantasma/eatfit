import React, { Component } from 'react'

import Navbar from '../components/navbar/navbar.js'
import Footer from '../components/footer/footer.js'
import $ from 'jquery'


class Layout extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar $={$} />
                <div className="main">
                Layout
                </div>
                <Footer />

            </div>
        );
    }
}

export default Layout;