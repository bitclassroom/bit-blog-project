import React from 'react'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Main from './Main'
import Footer from './components/Footer'

const App = () => (
    <ScrollToTop>
        <Header />
        <Main />
        <Footer />
    </ScrollToTop>
)

export default App
