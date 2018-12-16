import React from 'react'
import { Link } from 'react-router-dom'
import MainMenu from './MainMenu'

const Header = () => (
    <header>
        <nav className="blue darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        BIT Blog
                    </Link>
                    <MainMenu />
                </div>
            </div>
        </nav>
    </header>
)

export default Header
