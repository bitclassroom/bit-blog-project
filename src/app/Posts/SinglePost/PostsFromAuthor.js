import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { postService } from '../../../services/PostService'

class PostsFromAuthor extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts()
    }

    async loadPosts() {
        const { authorId } = this.props
        const posts = await postService.fetchAuthorPosts(authorId)

        this.setState({ posts })
    }

    renderPosts() {
        const { posts } = this.state
        return posts.map(({ id, title }) => (
            <Link to={`/posts/${id}`} key={id}>
                <h5 className="truncate">- {title}</h5>
            </Link>
        ))
    }

    render() {
        return (
            <div>
                <h5>Posts from same author</h5>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostsFromAuthor
