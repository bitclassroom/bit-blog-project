import React, { Component } from 'react'

import { postService } from '../../services/PostService'

import PostAuthor from './SinglePost/PostAuthor'
import PostsFromAuthor from './SinglePost/PostsFromAuthor'
import CommentsList from './Comments/CommentsList'

class SinglePostPage extends Component {
    state = {
        post: null
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

        const { id, title, body, authorId } = post

        return (
            <>
                <h3 className="center-align">{title}</h3>
                <PostAuthor authorId={authorId} />
                <div className="card-panel">
                    <p className="flow-text">{body}</p>
                </div>
                <br />
                <PostsFromAuthor authorId={authorId} />
                <br />
                <h5>Comments</h5>
                <CommentsList postId={id} />
            </>
        )
    }
}

export default SinglePostPage
