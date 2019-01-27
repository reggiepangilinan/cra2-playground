import React, { useEffect, FunctionComponent } from 'react'
import { isEmpty } from 'lodash/fp';
import Post from './post.component';
import { IDispatchProps } from './posts.container';
import { PostsState } from './duck/state';

type Props = PostsState & IDispatchProps;

const Posts: FunctionComponent<Props> = (props: Props) => {
    useEffect(() => {
        props.postRequest();
        return () => props.postCleanup()
    }, [])
    return (
        <div>
            <h3>Posts</h3>
            {
                props.requestPending ? 
                    'Loading...'
                    :
                    props.posts.map(p => <Post key={p.id.toString()} {...p} />)
            }
            {props.error && <div>{props.error}</div>}
        </div>
    )
}

export default Posts
