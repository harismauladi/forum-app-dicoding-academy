/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';

import { asyncPreloadProcess } from './states/isPreload/action';

import Navbar from './layouts/Navbar';
import { asyncUnsetAuthUser } from './states/authUser/action';

import CreateThread from './pages/CreateThread';
import NotFound from './pages/NotFound';
// import Loading from "./pages/Loading";

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    const onAuthNull = createBrowserRouter([
      {
        path: '/*',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ]);

    return (
      <>
        <RouterProvider router={onAuthNull} />;
      </>
    );
  }

  return (
    <BrowserRouter>
      <header>
        <div className="fixed z-10 top-0 w-full ">
          <LoadingBar progressIncrease={1} showFastActions updateTime={100} />
        </div>
        <Navbar
          name={authUser.name}
          avatar={authUser.avatar}
          onSignOut={onSignOut}
        />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboards" element={<LeaderboardPage />} />
        <Route path="/threads/:id" element={<DetailPage />} />
        <Route path="/add" element={<CreateThread />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
