import React from 'react'
import { PostModel } from './duck/reducer';
import { Link } from 'react-router-dom';

type WithKey = {
    key: string
}
type Props = PostModel & WithKey;

const Post = (props: Props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <Link to={`post/${props.id}/comments`}>Comments</Link>
        </div >
    )
}

export default Post
