import React, { Component } from 'react'

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
        this.loadPost()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.url !== prevProps.match.url) {
            this.loadPost()
        }
    }

    async loadPost() {
        const {
            match: { params }
        } = this.props
        const { postId } = params

        const post = await postService.fetchPostDetails(postId)

        this.setState({ post })
    }

    render() {
        const { post } = this.state

        if (!post) {
            return <h3 className="center-align">Loading...</h3>
        }

        const { title, body, authorId } = post

        return (
            <>
                <h3 className="center-align">{title}</h3>
                <PostAuthor authorId={authorId} />
                <div className="card-panel">
                    <p className="flow-text">{body}</p>
                </div>
                <PostsFromAuthor authorId={authorId} />
            </>
        )
    }
}

export default PostDetailsPage
