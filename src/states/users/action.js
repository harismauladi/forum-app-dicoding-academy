import API from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}
function asyncRegisterUser({ email, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const regist = await API.register({ email, name, password });
      console.log(regist);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
