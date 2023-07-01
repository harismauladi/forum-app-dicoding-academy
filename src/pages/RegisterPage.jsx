import AuthLayout from "../layouts/AuthLayout";
import InputForm from "../fragments/InputForm";
import ButtonForm from "../elements/ButtonForm";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const [name, inputUsernameHandler] = useInput("");
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = () => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate("/");
  };

  return (
    <>
      <AuthLayout
        type="register"
        imageIcon="../registerPageIcon.png"
        styleImage="relative top-4 sm:left-28"
      >
        <InputForm
          type="text"
          placeHolder="username"
          id="usernamelInput"
          htmlFor="usernameInput"
          text="Username"
          action={inputUsernameHandler}
          value={name}
        />

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
        <ButtonForm type="button" text="Register" event={onRegister} />
      </AuthLayout>
    </>
  );
}

export default RegisterPage;
