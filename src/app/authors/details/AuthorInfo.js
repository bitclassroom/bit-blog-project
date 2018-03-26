import React from 'react'

const AuthorInfo = ({fullName, username, email, phone}) => (
    <div className="card-panel">
        <h3>{fullName}</h3>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
    </div>
)

export default AuthorInfo
