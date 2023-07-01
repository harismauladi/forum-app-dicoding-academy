import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUser/reducer";
import usersReducer from "./users/reducer";
import ThreadsReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import isPreloadReducer from "./isPreload/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import categoryReducer from "./categorys/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: ThreadsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    leaderboards: leaderboardsReducer,
    category: categoryReducer,
  },
});

export default store;
