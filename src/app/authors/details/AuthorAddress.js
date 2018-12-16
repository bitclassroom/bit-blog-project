import React from 'react'

const AuthorAddress = ({ street, city }) => (
    <div className="card-panel">
        <h3>Address</h3>
        <p>street: {street}</p>
        <p>city: {city}</p>
    </div>
)

export default AuthorAddress
