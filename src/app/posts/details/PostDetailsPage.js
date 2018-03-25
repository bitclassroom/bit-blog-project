import React, { Component } from 'react'
import PostAuthor from './PostAuthor'
import PostsFromAuthor from './PostsFromAuthor'
import { postService } from '../../../services/PostService'

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
        postService.fetchPostDetails(postId).then(post => {
            this.setState({ post })
        })
    }

    render() {
        if (!this.state.post) {
            return <h2>Nothing here</h2>
        }

        const { title, body, authorId } = this.state.post

        return (
            <div className="card-panel">
                <h3>{title}</h3>
                <PostAuthor authorId={authorId} />
                <p>{body}</p>
                <hr />
                <PostsFromAuthor authorId={authorId} />
            </div>
        )
    }
}

export default PostDetailsPage
