import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom';
import { PostModel } from './duck/state';
import styles from './post.module.scss';
import { ThemeContext } from '../../../common/context/theme';

type WithKey = {
    key: string
}
type Props = PostModel & WithKey;

const Post: FunctionComponent<Props> = (props: Props) => {

    const themeContext = useContext(ThemeContext);
    
    return (
        <div className={styles[`tile-${themeContext.current}`]}>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <Link to={`posts/${props.id}/comments`}>Comments</Link>
        </div >
    )
}

export default Post
