import React from 'react'
import { Link } from 'react-router-dom'
import AuthorItem from './AuthorItem'

const AuthorsList = () => {
    return (
        <div>
            {/* <Link to="/authors/1" >Name</Link>
            <Link to="/authors/1" >Name 1</Link>
            <Link to="/authors/1" >Name 2</Link> */}
            <AuthorItem />
            <AuthorItem />
            <AuthorItem />
        </div>
    )
}

export default AuthorsList