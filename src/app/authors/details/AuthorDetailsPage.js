import React, { Component } from 'react'

const AuthorDetails = () => {
    return (
        <div className="card-panel">
            <h3>Name Surname</h3>
            <p>un: </p>
            <p>email: </p>
            <p>phone: </p>
        </div>
    )
}

const AuthorAddress = () => {
    return (
        <div className="card-panel">
            <h3>Address</h3>
            <p>street: </p>
            <p>city: </p>
        </div>
    )
}

const AuthorCompany = () => {
    return (
        <div className="card-panel">
            <h3>Company</h3>
            <p>name: </p>
            <p>slogan: </p>
        </div>
    )
}

class AuthorDetailsPage extends Component {
    render() {
        return (
            <div>
                <AuthorDetails />
                <AuthorAddress />
                <AuthorCompany />
            </div>
        )
    }
}

export default AuthorDetailsPage
