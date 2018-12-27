import React, { Component } from 'react'

import { commentsService } from '../../../services/CommentsService'

import CommentItem from './CommentItem'

class CommentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            comments: []
        }
    }

    componentDidMount() {
        this.loadComments()
    }

    async loadComments() {
        const { postId } = this.props
        try {
            const comments = await commentsService.fetchComments(postId)

            this.setState({ comments })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        const { comments } = this.state

        return (
            <ul className="collection">
                {comments.map(comment => (
                    <CommentItem comment={comment} key={comment.id} />
                ))}
            </ul>
        )
    }
}

export default CommentsList
