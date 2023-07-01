import API from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import showAlert from "../../utils/alert";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const token = await API.login({ email, password });
      API.putAccessToken(token);
      const authUser = await API.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
      console.log(authUser);
    } catch (error) {
      showAlert.alertMassage(error.massage);
    }
    dispatch(hideLoading());
  };
}
function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    API.putAccessToken("");
  };
}
export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
