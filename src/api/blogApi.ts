import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { PostCommentModel } from '../features/postcomments/duck/state';
import { PostModel } from '../features/posts/duck/state';
import { TodoModel } from '../features/todos/duck/state';

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BLOG_API_URL
});

export const COMMENTS = 'comments';
export const POSTS = 'posts';
export const TODOS = 'todos';

export interface IBlogApi {
    getPostComments(postId: number | null | undefined): AxiosPromise<PostCommentModel[]>,
    getPosts(): AxiosPromise<PostModel[]>
    getTodos(): AxiosPromise<TodoModel[]>
}

class BlogApi implements IBlogApi {
    getTodos(): AxiosPromise<TodoModel[]> {
        return api.get(TODOS);
    }
    getPosts(): AxiosPromise<PostModel[]> {
        return api.get(POSTS);
    }
    getPostComments(postId: number | null | undefined): AxiosPromise<PostCommentModel[]> {
        return api.get(`${POSTS}/${postId}/${COMMENTS}`);
    }
};

const blogApi = new BlogApi();

export default (): IBlogApi => blogApi;