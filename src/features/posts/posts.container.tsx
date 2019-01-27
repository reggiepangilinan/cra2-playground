import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { postRequest, postCleanup } from './duck/actions';
import Posts from './posts.component';
import { PostsState } from './duck/state';

export interface IDispatchProps {
    postRequest: typeof postRequest,
    postCleanup: typeof postCleanup
}

const mapStateToProps = (state: AppState): PostsState =>
    ({ ...state.posts })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        postRequest: () => dispatch(postRequest()),
        postCleanup: () => dispatch(postCleanup()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)