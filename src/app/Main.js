import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsPage from './posts/PostsPage'
import AuthorsPage from './authors/AuthorsPage'

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path="/" component={PostsPage} />
                <Route path="/authors" component={AuthorsPage} />
            </Switch>
        </main>
    )
}

export default Main