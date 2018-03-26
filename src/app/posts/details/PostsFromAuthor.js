import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postService } from '../../../services/PostService'

class PostsFromAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const { authorId } = this.props
        postService.fetchAuthorPosts(authorId).then(posts => {
            this.setState({
                posts: posts.slice(0, 3)
            })
        })
    }

    renderPosts(posts) {
        return posts.map(post => {
            const { id, title } = post
            return (
                <Link to={`/posts/${id}`} key={id}>
                    <h5 className="truncate">- {title}</h5>
                </Link>
            )
        })
    }

    render() {
        const { posts } = this.state
        const { renderPosts } = this

        return (
            <div>
                <h5>Posts from same author</h5>
                {renderPosts(posts)}
            </div>
        )
    }
}

export default PostsFromAuthor
