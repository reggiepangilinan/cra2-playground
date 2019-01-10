import { PostsState } from './../features/posts/duck/reducer';
import { CounterState } from "../features/counter/duck/reducer";

export type AppState = {
  readonly counter: CounterState;
  readonly posts: PostsState;
}
