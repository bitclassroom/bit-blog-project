import React from 'react'

const CommentItem = ({ comment }) => {
    return (
        <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <span className="title grey-text">{comment.formatedEmail}</span>
            <p>{comment.body}</p>
        </li>
    )
}

export default CommentItem
