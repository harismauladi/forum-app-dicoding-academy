/* eslint-disable no-unused-expressions */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import API from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  UP_VOTE_THREAD_DETAIL: "UP_VOTE_THREAD_DETAL",
  DOWN_VOTE_THREAD_DETAIL: "DOWN_VOTE_THREAD_DETAIL",
  NEUTRALIZE_VOTE_THREAD_DEATIL: "NEUTRALIZE_VOTE_THREAD_DETAIL",
  ADD_COMMENTS: "ADD_COMMENTS",
  UP_VOTE_COMMENT: "UP_VOTE_COMMENT",
  DOWN_VOTE_COMMENT: "DOWN_VOTE_COMMENT",
  NEUTRALIZE_VOTE_COMMENT: "NEUTRALIZE_VOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function CommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENTS,
    payload: {
      comment,
    },
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: { userId },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: { userId },
  };
}

function neutralizeVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DEATIL,
    payload: { userId },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await API.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await API.createComment({ threadId, content });
      dispatch(CommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail(isVoteDown) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(showLoading());

    dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      await API.upVoteThreads(threadDetail.id);
    } catch (erorr) {
      isVoteDown
        ? dispatch(downVoteThreadDetailActionCreator(authUser.id))
        : dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
      alert(erorr.massage);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail(isVoteUp) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(showLoading());

    dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      await API.downVoteThread(threadDetail.id);
    } catch (erorr) {
      isVoteUp
        ? dispatch(upVoteThreadDetailActionCreator(authUser.id))
        : dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
      alert(erorr.massage);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment({ threadId, commentId, isVoteDown }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(showLoading());

    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await API.upVoteComment({ threadId, commentId });
    } catch (erorr) {
      isVoteDown
        ? dispatch(
          downVoteCommentActionCreator({ commentId, userId: authUser.id }),
        )
        : dispatch(
          neutralizeVoteCommentActionCreator({
            commentId,
            userId: authUser.id,
          }),
        );
      alert(erorr.massage);
    }
    dispatch(hideLoading);
  };
}

function asyncDownVoteComment({ threadId, commentId, isVoteUp }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await API.downVoteComment({ threadId, commentId });
    } catch (erorr) {
      isVoteUp
        ? dispatch(
          upVoteCommentActionCreator({ commentId, userId: authUser.id }),
        )
        : dispatch(
          neutralizeVoteCommentActionCreator({
            commentId,
            userId: authUser.id,
          }),
        );
      alert(erorr.massage);
    }
  };
}

function asyncNeutralizeVoteComment({ threadId, commentId, isVoteUp = false }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
    );

    try {
      await API.neutralizeVoteComment({ threadId, commentId });
    } catch (erorr) {
      isVoteUp
        ? dispatch(
          upVoteCommentActionCreator({ commentId, userId: authUser.id }),
        )
        : dispatch(
          downVoteCommentActionCreator({
            commentId,
            userId: authUser.id,
          }),
        );
      alert(erorr.massage);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  CommentActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteThreadDetail,
  asyncAddComment,
  asyncDownVoteComment,
  asyncUpVoteComment,
  asyncNeutralizeVoteComment,
};
