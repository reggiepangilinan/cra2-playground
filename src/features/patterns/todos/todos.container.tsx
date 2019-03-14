import { connect } from 'react-redux'
import { AppState } from "../../../redux/AppState";
import { Dispatch } from 'redux';
import { todosRequest, todosCleanup } from './duck/actions';
import Todos from './todos.component';
import { TodosState } from './duck/state';

export interface IDispatchProps {
    todosRequest: typeof todosRequest,
    todosCleanup: typeof todosCleanup
}

const mapStateToProps = (state: AppState): TodosState =>
    ({ ...state.todos })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        todosRequest: () => dispatch(todosRequest()),
        todosCleanup: () => dispatch(todosCleanup()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)