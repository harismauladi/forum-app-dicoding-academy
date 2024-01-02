import { hideLoading, showLoading } from 'react-redux-loading-bar';
import API from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}
function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, category, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await API.createThread({ title, category, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThread({ threadId, isVoteDown }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(upVoteThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await API.upVoteThreads(threadId);
    } catch (erorr) {
      if (isVoteDown) {
        dispatch(
          downVoteThreadActionCreator({ userId: authUser.id, threadId }),
        );
      } else {
        dispatch(
          neutralizeVoteThreadActionCreator({ userId: authUser.id, threadId }),
        );
      }

      alert(erorr.message);
    }
  };
}

function asyncDownVoteThread({ threadId, isVoteUp }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(downVoteThreadActionCreator({ userId: authUser.id, threadId }));

    try {
      await API.downVoteThread(threadId);
    } catch (erorr) {
      if (isVoteUp) {
        dispatch(upVoteThreadActionCreator({ userId: authUser.id, threadId }));
      } else {
        dispatch(
          neutralizeVoteThreadActionCreator({ userId: authUser.id, threadId }),
        );
      }

      alert(erorr.message);
    }
  };
}
export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  neutralizeVoteThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
};
