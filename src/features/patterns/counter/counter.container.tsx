import { connect } from 'react-redux'
import Counter from './counter.component';
import { AppState } from "../../../redux/AppState";
import { Dispatch } from 'redux';
import { counterIncrement, counterDecrement } from './duck/actions';
import { CounterState } from './duck/state';

export interface IDispatchProps {
  counterIncrement: typeof counterIncrement
  counterDecrement: typeof counterDecrement
}

const mapStateToProps = (state: AppState): CounterState =>
  ({ ...state.counter })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    counterIncrement: (value: number) => dispatch(counterIncrement(value)),
    counterDecrement: (value: number) => dispatch(counterDecrement(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)