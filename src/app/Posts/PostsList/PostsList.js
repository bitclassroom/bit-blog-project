import React from 'react'
import PropTypes from 'prop-types'

import PostItem from './PostItem'
import Post from '../../../models/Post'

const PostsList = ({ posts = [] }) => posts.map(post => <PostItem post={post} key={post.id} />)

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.instanceOf(Post))
}

export default PostsList
