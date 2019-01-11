import { PostsState } from './../features/posts/duck/reducer';
import { CounterState } from "../features/counter/duck/reducer";
import { TodosState } from '../features/todos/duck/reducer';

export type AppState = {
  readonly counter: CounterState;
  readonly posts: PostsState;
  readonly todos: TodosState;
}
