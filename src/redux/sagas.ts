import postsSaga from "../features/posts/duck/saga";
import todosSaga from "../features/todos/duck/saga";
import postCommentsSaga from "../features/postcomments/duck/saga";
import { fork, all } from "redux-saga/effects";

export default function* () {
    yield all([
        fork(postsSaga),
        fork(todosSaga),
        fork(postCommentsSaga)
    ]);
}