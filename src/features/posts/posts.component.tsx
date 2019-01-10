import React, { useEffect } from 'react'
import Post from './post.component';
import { PostsState } from './duck/reducer';
import { IDispatchProps } from './posts.container';

type Props = PostsState & IDispatchProps;

const Posts = (props: Props) => {
    useEffect(() => {
        props.postRequest();
    }, [])
    return (
        <div>
            <h3>Posts</h3>
            {
                props.requestPending ?
                    'Loading...'
                    :
                    props.posts.map(p => <Post key={p.id.toString()}{...p} />)
            }
            {props.error && <div>{props.error}</div>}
        </div>
    )
}

export default Posts
