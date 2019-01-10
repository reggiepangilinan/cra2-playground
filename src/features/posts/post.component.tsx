import React from 'react'
import { PostModel } from './duck/reducer';

type WithKey = {
    key: string
}
type Props = PostModel & WithKey;

const Post = (props: Props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    )
}

export default Post
