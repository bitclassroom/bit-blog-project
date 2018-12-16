import React, { Component } from 'react'

import { authorService } from '../../../services/AuthorService'

import AuthorInfo from './AuthorInfo'
import AuthorAddress from './AuthorAddress'
import AuthorCompany from './AuthorCompany'

class AuthorDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentDidMount() {
        const authorId = this.props.match.params.id
        this.getAuthor(authorId)
    }

    getAuthor(id) {
        authorService.fetchAuthor(id).then(author => {
            this.setState({ author })
        })
    }

    render() {
        const { author } = this.state

        if (!author) {
            return <h4 className="center-align">Loading...</h4>
        }

        const { company, address } = author

        return (
            <div>
                <h4 className="center-align">AUTHOR</h4>
                <AuthorInfo {...author} />
                <AuthorAddress {...address} />
                <AuthorCompany {...company} />
            </div>
        )
    }
}

export default AuthorDetailsPage
