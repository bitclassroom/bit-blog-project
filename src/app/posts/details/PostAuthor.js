import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { authorService } from '../../../services/AuthorService'

class PostAuthor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentWillMount() {
        const { authorId } = this.props
        authorService
            .fetchAuthor(authorId)
            .then((author) => {
                this.setState({ author })
            })
    }

    render() {

        if (!this.state.author) {
            return <p>...</p>
        }

        const { authorId } = this.props
        const { fullName } = this.state.author

        return (
            <Link to={`/authors/${authorId}`}>
                <div className="center-align">{fullName}</div>
            </Link>
        )
    }
}

export default PostAuthor
