import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="green darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        BIT Blog
                    </Link>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
