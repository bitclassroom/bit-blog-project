import React, { Component } from 'react'
import _ from 'lodash'

import { postService } from '../../services/PostService'

import PostsList from './PostsList'
import Loader from './../partials/Loader/Loader'

class PostsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService
            .fetchPosts()
            .then((posts) => {
                this.setState({ posts })
            })
    }

    render() {
        const { posts } = this.state
        if (_.isEmpty(posts)) {
            return <Loader />
        }

        return (
            <div>
                <h4>POSTS</h4>
                <PostsList posts={this.state.posts} />
            </div>
        )
    }
}

export default PostsPage
