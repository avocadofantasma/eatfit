import React, { Component } from 'react'

import Sidenav from '../components/Sidenav/sidenav'
import Footer from '../components/footer/footer.js'
import $ from 'jquery'


class Layout extends Component {
    state = {}
    render() {
        return (
            <div>
                <Sidenav $={$} />
                <div className="main">
                Layout
                </div>
                <Footer />

            </div>
        );
    }
}

export default Layout;