import { CounterState } from "../features/counter/duck/reducer";

export type AppState = {
  readonly counter: CounterState;
}
