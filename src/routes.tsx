
import { Route, Switch } from 'react-router-dom';
import React from 'react'
import CounterContainer from './features/counter/counter.container';
import PostsContainer from './features/posts/posts.container';
import TodosContainer from './features/todos/todos.container';
import PostcommentsContainer from './features/postcomments/postcomments.container';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={CounterContainer} />
            <Route exact path="/posts" component={PostsContainer} />>
            <Route exact path="/posts/:postId/comments" component={PostcommentsContainer} />
            <Route exact path="/todos" component={TodosContainer} />
        </Switch>
    )
}

export default Routes
