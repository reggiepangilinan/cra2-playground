import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { todosRequest } from './duck/actions';
import { TodosState, TodoModel } from './duck/reducer';
import Posts from './todos.component';

export interface IDispatchProps {
    todosRequest: typeof todosRequest,
}

const mapStateToProps = (state: AppState): TodosState =>
    ({ ...state.todos })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        todosRequest: () => dispatch(todosRequest())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)