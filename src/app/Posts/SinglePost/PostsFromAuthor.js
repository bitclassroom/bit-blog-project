import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { postService } from '../../../services/PostService'

class PostsFromAuthor extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.postId !== prevProps.postId) {
            this.loadPosts()
        }
    }

    async loadPosts() {
        const { authorId, postId } = this.props
        const posts = await postService.fetchAuthorPosts(authorId)

        this.setState({
            posts: posts.filter(post => post.id !== postId)
        })
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
            <>
                <h5>Posts from same author</h5>
                {this.renderPosts()}
            </>
        )
    }
}

PostsFromAuthor.propTypes = {
    authorId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired
}

export default PostsFromAuthor
