import React, { Component } from 'react'
import _ from 'lodash'

import { postService } from '../../services/PostService'

import Loader from '../components/Loader/Loader'
import PostsList from './PostsList'

class PostsPage extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        try {
            const posts = await postService.fetchPosts()
            this.setState({ posts })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { posts } = this.state

        return (
            <Loader isLoading={_.isEmpty(posts)}>
                <h4 className="center-align">POSTS</h4>
                <PostsList posts={this.state.posts} />
            </Loader>
        )
    }
}

export default PostsPage
