import React, { Component } from 'react'
import PostsList from './PostsList'

class PostsPage extends Component {
    render() {
        return (
            <div>
                <h4>POSTS</h4>
                <PostsList />
            </div>
        )
    }
}

export default PostsPage