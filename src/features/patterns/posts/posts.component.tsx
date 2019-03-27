import React, { useEffect, FunctionComponent } from 'react'
import Post from './post.component';
import { IDispatchProps } from './posts.container';
import { PostsState } from './duck/state';
import Loader, { LoaderType } from '../../../common/components/Loader';
import styles from './post.module.scss';

type Props = PostsState & IDispatchProps;

const Posts: FunctionComponent<Props> = (props: Props) => {
    useEffect(() => {
        props.postRequest();
        return () => {
            props.postCleanup();
        }
    }, []);


    if (props.requestPending)
        return <Loader fillcontainer type={LoaderType.simple} />

    if (props.error)
        return <div>{props.error}</div>

    return (
        <div>
            <h2>Posts</h2>
            <div className={styles.content}>
                {
                    props.posts.map(p => <Post key={p.id.toString()} {...p} />)
                }
            </div>

        </div>
    )
}

export default Posts
