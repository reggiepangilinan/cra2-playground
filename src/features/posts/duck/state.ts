
export type PostsState = {
    posts: PostModel[],
    error?: string,
    requestPending: boolean
};

export type PostModel = {
    userId: number,
    id: number,
    title: string,
    body: string
};