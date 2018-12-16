import React from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = ({ id, fullName }) => (
    <Link to={`/authors/${id}`}>
        <div className="card blue darken-1 hoverable">
            <div className="card-content white-text">
                <span className="card-title">{fullName}</span>
            </div>
        </div>
    </Link>
)

export default AuthorItem
