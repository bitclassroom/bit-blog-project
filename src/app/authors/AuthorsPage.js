import React, { Component } from 'react'
import AuthorsList from './AuthorsList'

class AuthorsPage extends Component {
    render() {
        return (
            <div>
                <h3>Authors</h3>
                <AuthorsList />
            </div>
        )
    }
}

export default AuthorsPage