import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { postCommentsRequest, postCommentsCleanup } from './duck/actions';
import PostComments from './postcomments.component';
import { PostCommentsState } from './duck/state';

export interface IDispatchProps {
    postCommentsRequest: typeof postCommentsRequest,
    postCommentsCleanup: typeof postCommentsCleanup
}

const mapStateToProps = (state: AppState): PostCommentsState =>
    ({ ...state.comments })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        postCommentsRequest: (postId: number) => dispatch(postCommentsRequest(postId)),
        postCommentsCleanup: () => dispatch(postCommentsCleanup()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostComments)