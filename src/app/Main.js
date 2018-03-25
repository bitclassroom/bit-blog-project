import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsPage from './posts/PostsPage'

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route path="/" component={PostsPage} />
            </Switch>
        </main>
    )
}

export default Main