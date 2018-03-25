import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostAuthor extends Component {
    render() {
        return (
            <Link to="/authors/1">
                <div>
                Author Name
                </div>
            </Link >
        )
    }
}

export default PostAuthor