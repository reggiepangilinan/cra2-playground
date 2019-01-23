import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';
import { PostModel } from './duck/state';

type WithKey = {
    key: string
}
type Props = PostModel & WithKey;

const Post: FunctionComponent<Props> = (props: Props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <Link to={`posts/${props.id}/comments`}>Comments</Link>
        </div >
    )
}

export default Post
