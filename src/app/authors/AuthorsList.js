import React from 'react'
import _ from 'lodash'

import Loader from '../partials/Loader/Loader'
import AuthorItem from './AuthorItem'

const AuthorsList = ({ authors }) => {
    if (_.isEmpty(authors)) {
        return <Loader />
    }

    const authorsListElements = authors.map(author => <AuthorItem {...author} />)

    return authorsListElements
}

export default AuthorsList
