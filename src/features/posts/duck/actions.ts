import { Action } from "redux";
import { PostModel } from "./state";

export enum actionTypes {
    POSTS_REQUEST = '@app/POSTS/REQUEST',
    POSTS_REQUEST_PENDING = '@app/POSTS/REQUEST_PENDING',
    POSTS_REQUEST_SUCCESS = '@app/POSTS/REQUEST_SUCCESS',
    POSTS_REQUEST_FAILURE = '@app/POSTS/REQUEST_FAILURE',
}

export interface IPostRequestAction extends Action {
    posts?: PostModel[],
    error?: string
}

export const postRequest = (): IPostRequestAction => ({
    type: actionTypes.POSTS_REQUEST,
});

export const postRequestPending = (): IPostRequestAction => ({
    type: actionTypes.POSTS_REQUEST_PENDING,
});


export const postRequestSuccess = (posts: PostModel[]): IPostRequestAction => ({
    type: actionTypes.POSTS_REQUEST_SUCCESS,
    posts
});

export const postRequestFailure = (error: string): IPostRequestAction => ({
    type: actionTypes.POSTS_REQUEST_FAILURE,
    error
});

