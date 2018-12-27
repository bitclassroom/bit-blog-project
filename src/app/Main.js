import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsPage from './Post/PostsPage'
import NewPostPage from './Post/NewPostPage'
import SinglePostPage from './Post/SinglePostPage'
import AuthorsPage from './Author/AuthorsPage'
import SingleAuthorPage from './Author/SingleAuthorPage'
import AboutPage from './About/AboutPage'

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/posts/new" component={NewPostPage} />
            <Route path="/posts/:postId" component={SinglePostPage} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route path="/authors/:id" component={SingleAuthorPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </main>
)

export default Main
