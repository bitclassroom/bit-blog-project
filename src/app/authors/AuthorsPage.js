import React, { Component } from 'react'

import AuthorsList from './AuthorsList'
import { authorService } from '../../services/AuthorService'
import { cancelAPIRequests } from '../../shared/api'

class AuthorsPage extends Component {
    state = {
        authors: []
    }

    componentDidMount() {
        this.loadAuthors()
    }

    componentWillUnmount() {
        cancelAPIRequests()
    }

    async loadAuthors() {
        const authors = await authorService.fetchAuthors()

        this.setState({ authors })
    }

    render() {
        const { authors } = this.state
        return (
            <>
                <h4 className="center-align">AUTHORS</h4>
                <AuthorsList authors={authors} />
            </>
        )
    }
}

export default AuthorsPage
