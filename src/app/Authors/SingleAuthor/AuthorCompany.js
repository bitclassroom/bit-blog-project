import React from 'react'

const AuthorCompany = ({ name, slogan }) => (
    <div className="card-panel">
        <h3>Company</h3>
        <p>Name: {name}</p>
        <p>Slogan: {slogan}</p>
    </div>
)

export default AuthorCompany
