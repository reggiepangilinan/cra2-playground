import postsSaga from "../features/patterns/posts/duck/saga";
import todosSaga from "../features/patterns/todos/duck/saga";
import postCommentsSaga from "../features/patterns/postcomments/duck/saga";
import { fork, all } from "redux-saga/effects";

export default function* () {
    yield all([
        fork(postsSaga),
        fork(todosSaga),
        fork(postCommentsSaga)
    ]);
}