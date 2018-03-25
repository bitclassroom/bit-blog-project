import React from 'react'
import PostItem from './PostItem'

const PostsList = props => {
    const { posts } = props

    const postsListView = posts.slice(0, 10).map(post => {
        return <PostItem {...post} key={post.id} />
    })

    return <div>{postsListView}</div>
}

export default PostsList
