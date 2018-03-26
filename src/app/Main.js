import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsPage from './posts/PostsPage'
import AuthorsPage from './authors/AuthorsPage'
import AuthorDetailsPage from './authors/details/AuthorDetailsPage'
import PostDetailsPage from './posts/details/PostDetailsPage'
import AboutPage from './about/AboutPage'
import NewPostPage from './posts/NewPostPage'

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path="/" component={PostsPage} />
                <Route exact path="/posts/new" component={NewPostPage} />
                <Route path="/posts/:postId" component={PostDetailsPage} />
                <Route exact path="/authors" component={AuthorsPage} />
                <Route path="/authors/:id" component={AuthorDetailsPage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </main>
    )
}

export default Main
