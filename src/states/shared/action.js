import API from "../../utils/api";
import { neutralizeVoteThreadDetailActionCreator } from "../threadDetail/action";
import {
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
} from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await API.getAllUsers();
      const threads = await API.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread({ threadId, isVoteUp = false }) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();

    dispatch(
      neutralizeVoteThreadActionCreator({ threadId, userId: authUser.id })
    );

    if (threadDetail !== null) {
      dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    }

    try {
      await API.neutralizeVoteThread(threadId);
    } catch (erorr) {
      isVoteUp
        ? dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }))
        : dispatch(
            downVoteThreadActionCreator({ threadId, userId: authUser.id })
          );

      threadDetail !== null && isVoteUp
        ? dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }))
        : dispatch(
            downVoteThreadActionCreator({ threadId, userId: authUser.id })
          );
      alert(erorr.message);
    }
  };
}

export { asyncPopulateUsersAndThreads, asyncNeutralizeVoteThread };
