import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.css'

import Header from './partials/Header'
import Main from './Main'
import Footer from './partials/Footer'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main />
                <Footer />
            </Fragment>
        )
    }
}

export default App
