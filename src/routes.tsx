
import { Route, Switch } from 'react-router-dom';
import React from 'react'
import AsyncComponent from './common/components/AsyncComponent';

const CounterContainer = () => import('./features/counter/counter.container');
const PostsContainer = () => import('./features/posts/posts.container');
const PostcommentsContainer = () => import('./features/postcomments/postcomments.container');
const TodosContainer = () => import('./features/todos/todos.container');

const UsersComponent = () => import('./features/users/users.component');

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={AsyncComponent(CounterContainer)} />
            <Route exact path="/posts" component={AsyncComponent(PostsContainer)} />>
            <Route exact path="/posts/:postId/comments" component={AsyncComponent(PostcommentsContainer)} />
            <Route exact path="/todos" component={AsyncComponent(TodosContainer)} />
            <Route exact path="/users" component={AsyncComponent(UsersComponent)} />
        </Switch>);
}

export default Routes
