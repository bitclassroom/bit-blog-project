import React from 'react'

import PostItem from './PostItem'

const PostsList = ({ posts = [] }) => posts.map(post => <PostItem {...post} key={post.id} />)

export default PostsList
