import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => (
    <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/authors">Authors</Link>
        </li>
        <li>
            <Link to="/albums">Albums</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </>
)

export default MainMenu
