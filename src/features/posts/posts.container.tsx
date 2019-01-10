import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { postRequest, postRequestFailure, postRequestSuccess } from './duck/actions';
import { PostsState, PostModel } from './duck/reducer';
import Posts from './posts.component';

export interface IDispatchProps {
    postRequest: typeof postRequest,
}

const mapStateToProps = (state: AppState): PostsState =>
    ({ ...state.posts })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        postRequest: () => dispatch(postRequest())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)