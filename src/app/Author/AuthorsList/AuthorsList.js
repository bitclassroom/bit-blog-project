import React from 'react'
import _ from 'lodash'

import Loader from '../../components/Loader/Loader'
import AuthorItem from './AuthorItem'

const AuthorsList = ({ authors = [] }) => {
    const authorsListElements = authors.map(author => <AuthorItem {...author} key={author.id} />)

    return <Loader isLoading={_.isEmpty(authors)}>{authorsListElements}</Loader>
}

export default AuthorsList
