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

export const getTodos = (): AxiosPromise<TodoModel[]> => api.get(TODOS);
export const getPosts = (): AxiosPromise<PostModel[]> => api.get(POSTS);
export const getPostComments = (postId: number | null | undefined): AxiosPromise<PostCommentModel[]> => api.get(`${POSTS}/${postId}/${COMMENTS}`);