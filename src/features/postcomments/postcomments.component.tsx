import React, { useEffect, FunctionComponent } from 'react'
import { IDispatchProps } from './postcomments.container';
import { RouteComponentProps } from 'react-router-dom';
import { PostCommentsState } from './duck/state';

interface IMatchParams {
    postId: string;
}
interface ILocalProps extends RouteComponentProps<IMatchParams> {

}

type Props = PostCommentsState & IDispatchProps & ILocalProps;

const PostComments: FunctionComponent<Props> = (props: Props) => {

    useEffect(() => {
        props.postCommentsRequest(parseInt(props.match.params.postId));
        return () => props.postCommentsCleanup();
    }, [])

    return (
        <div>
            <h3>Post Comment</h3>
            {
                props.requestPending ?
                    'Loading...'
                    :
                    props.comments.map(c =>
                        <div key={c.id}>
                            <h3>{c.name}</h3>
                            <small>{c.email}</small>
                            <p>{c.body}</p>
                        </div>)
            }
            {props.error && <div>{props.error}</div>}
        </div>
    )
}

export default PostComments
