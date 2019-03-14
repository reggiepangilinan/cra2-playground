
import { CounterState } from '../features/patterns/counter/duck/state';
import { PostCommentsState } from '../features/patterns/postcomments/duck/state';
import { PostsState } from '../features/patterns/posts/duck/state';
import { TodosState } from '../features/patterns/todos/duck/state';

export type AppState = {
  readonly counter: CounterState;
  readonly posts: PostsState;
  readonly todos: TodosState;
  readonly comments: PostCommentsState
}
