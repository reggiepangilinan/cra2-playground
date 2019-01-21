import React from 'react'
import { TodoModel } from './duck/state';

type WithKey = {
    key: string
}
type Props = TodoModel & WithKey;

const Post = (props: Props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.completed}</p>
        </div>
    )
}

export default Post
