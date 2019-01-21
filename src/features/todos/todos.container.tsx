import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { todosRequest } from './duck/actions';
import Posts from './todos.component';
import { TodosState } from './duck/state';

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