import React, { Component } from 'react'

import AuthorsList from './AuthorsList'
import { authorService } from '../../services/AuthorService'

class AuthorsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        authorService
            .fetchAuthors()
            .then((authors) => {
                this.setState({ authors })
            })
    }

    render() {
        const { authors } = this.state
        return (
            <div>
                <h4 className="center-align">AUTHORS</h4>
                <AuthorsList authors={authors} />
            </div>
        )
    }
}

export default AuthorsPage
