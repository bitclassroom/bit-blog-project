import React, { Component } from 'react'
import PostAuthor from './PostAuthor'
import PostsFromAuthor from './PostsFromAuthor'

class PostDetailsPage extends Component {
    render() {
        return (
            <div className="card-panel">
                <h3>Post title</h3>
                <PostAuthor />
                <p>I am a very simple card. I am good at containing small bits of information.
				I am convenient because I require little markup to use effectively.</p>
                <hr/>
                <PostsFromAuthor />
            </div>
        )
    }
}

export default PostDetailsPage