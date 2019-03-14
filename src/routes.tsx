
import { Route, Switch } from 'react-router-dom';
import React from 'react'
import AsyncComponent from './common/components/AsyncComponent';

const CounterContainer = () => import('./features/patterns/counter/counter.container');
const PostsContainer = () => import('./features/patterns/posts/posts.container');
const PostcommentsContainer = () => import('./features/patterns/postcomments/postcomments.container');
const TodosContainer = () => import('./features/patterns/todos/todos.container');
const UsersComponent = () => import('./features/patterns/users/users.component');
const SampleFormComponent = () => import('./features/patterns/sampleform/sampleform.component');

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={AsyncComponent(CounterContainer)} />
            <Route exact path="/posts" component={AsyncComponent(PostsContainer)} />>
            <Route exact path="/posts/:postId/comments" component={AsyncComponent(PostcommentsContainer)} />
            <Route exact path="/todos" component={AsyncComponent(TodosContainer)} />
            <Route exact path="/users" component={AsyncComponent(UsersComponent)} />
            <Route exact path="/sampleform" component={AsyncComponent(SampleFormComponent)} />
        </Switch>
    );
}

export default Routes
