import React from 'react'
import PropTypes from 'prop-types'

import Post from '../../../models/Post'

import PostItem from './PostItem'

const PostsList = ({ posts = [] }) => posts.map(post => <PostItem post={post} key={post.id} />)

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.instanceOf(Post))
}

export default PostsList
