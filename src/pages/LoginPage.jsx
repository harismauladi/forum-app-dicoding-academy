/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
// import React from "react";

import { useDispatch } from 'react-redux';
import ButtonForm from '../elements/ButtonForm';
import InputForm from '../fragments/InputForm';
import { useInput } from '../hooks/useInput';
import AuthLayout from '../layouts/AuthLayout';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const [email, emailHandler] = useInput('');
  const [password, passwordHandler] = useInput('');
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  const onLogin = () => {
    if (email === '' || email === undefined) {
      return alert('email cant be empty');
    }
    if (password === '' || password === undefined) {
      return alert('password cant be empty');
    }
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <AuthLayout
      type="login"
      imageIcon="../loginPageIcon.png"
      styleImage="relative sm:bottom-10"
    >
      <InputForm
        type="email"
        placeHolder="username@gmail.com"
        id="emailInput"
        htmlFor="emailInput"
        text="Email"
        action={emailHandler}
        value={email}
      />
      <InputForm
        type="password"
        placeHolder="*****"
        id="passwordInput"
        htmlFor="passwordInput"
        text="Password"
        action={passwordHandler}
        value={password}
      />
      <ButtonForm type="button" text="Login" event={onLogin} />
    </AuthLayout>
  );
}

export default LoginPage;
