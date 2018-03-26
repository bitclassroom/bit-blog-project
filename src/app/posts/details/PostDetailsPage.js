import React, { Component, Fragment } from 'react'

import { postService } from '../../../services/PostService'

import PostAuthor from './PostAuthor'
import PostsFromAuthor from './PostsFromAuthor'

class PostDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        this.loadPost(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.loadPost(nextProps)
    }

    loadPost(props) {
        const { match: { params } } = props
        const postId = params.postId

        postService
            .fetchPostDetails(postId)
            .then(post => {
                this.setState({ post })
            })
    }

    render() {
        if (!this.state.post) {
            return <h3 className="center-align">Loading...</h3>
        }

        const { title, body, authorId } = this.state.post

        return (
            <Fragment>
                <h3 className="center-align"    >{title}</h3>
                <PostAuthor authorId={authorId} />
                <div className="card-panel">
                    <p className="flow-text">{body}</p>
                </div>
                <PostsFromAuthor authorId={authorId} />
            </Fragment>
        )
    }
}

export default PostDetailsPage
