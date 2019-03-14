export type PostCommentsState = {
    comments: PostCommentModel[],
    error?: string,
    requestPending: boolean
};

export type PostCommentModel = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
};