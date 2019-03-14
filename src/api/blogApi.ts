import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { PostCommentModel } from '../features/patterns/postcomments/duck/state';
import { PostModel } from '../features/patterns/posts/duck/state';
import { TodoModel } from '../features/patterns/todos/duck/state';
import { UserModel } from '../features/patterns/users/models';

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BLOG_API_URL
});

export const COMMENTS = 'comments';
export const POSTS = 'posts';
export const TODOS = 'todos';

export const USERS = 'users';

export const getTodos = (): AxiosPromise<TodoModel[]> => api.get(TODOS);
export const getPosts = (): AxiosPromise<PostModel[]> => api.get(POSTS);

export const getUsers = (): AxiosPromise<UserModel[]> => api.get(USERS);

export const getPostComments = (postId: number | null | undefined): AxiosPromise<PostCommentModel[]> => api.get(`${POSTS}/${postId}/${COMMENTS}`);