import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ id, title, body }) => (
    <Link to={`/posts/${id}`}>
        <div className="col s12 hoverable">
            <div className="card blue darken-1">
                <div className="card-content white-text">
                    <span className="card-title truncate">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    </Link>
)

export default PostItem
