
import { CounterState } from '../features/counter/duck/state';
import { PostCommentsState } from '../features/postcomments/duck/state';
import { PostsState } from '../features/posts/duck/state';
import { TodosState } from '../features/todos/duck/state';

export type AppState = {
  readonly counter: CounterState;
  readonly posts: PostsState;
  readonly todos: TodosState;
  readonly comments: PostCommentsState
}
