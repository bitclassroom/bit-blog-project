import React, { Component, Fragment } from 'react'

import Header from './partials/Header'
import Main from './Main'
import Footer from './partials/Footer'

import './App.css'

import 'materialize-css/dist/css/materialize.css'

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
