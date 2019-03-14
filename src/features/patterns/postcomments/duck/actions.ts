
import { Action } from "redux";
import { PostCommentModel } from "./state";

export enum actionTypes {
    POST_COMMENTS_REQUEST = '@app/POST_COMMENTS/REQUEST',
    POST_COMMENTS_REQUEST_SUCCESS = '@app/POST_COMMENTS/REQUEST_SUCCESS',
    POST_COMMENTS_REQUEST_FAILURE = '@app/POST_COMMENTS/REQUEST_FAILURE',
    POST_COMMENTS_CLEANUP = '@app/POST_COMMENTS/CLEANUP',
}

export interface IPostCommentsRequestAction extends Action {
    comments?: PostCommentModel[],
    error?: string,
    postId?: number
}

export const postCommentsRequest = (postId: number): IPostCommentsRequestAction => ({
    type: actionTypes.POST_COMMENTS_REQUEST,
    postId
});

export const postCommentsRequestSuccess = (comments: PostCommentModel[]): IPostCommentsRequestAction => ({
    type: actionTypes.POST_COMMENTS_REQUEST_SUCCESS,
    comments
});

export const postCommentsRequestFailure = (error: string): IPostCommentsRequestAction => ({
    type: actionTypes.POST_COMMENTS_REQUEST_FAILURE,
    error
});

export const postCommentsCleanup = (): IPostCommentsRequestAction => ({
    type: actionTypes.POST_COMMENTS_CLEANUP,
});

