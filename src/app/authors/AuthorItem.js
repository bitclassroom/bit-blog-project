import React from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = () => {
    return (
        <Link to="/authors/1" >
            <div className="row">
                <div className="col s12 ">
                    <div className="card blue-grey darken-1 hoverable">
                        <div className="card-content white-text">
                            <span className="card-title">Name1</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AuthorItem
