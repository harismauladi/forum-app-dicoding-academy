import ButtonForm from "../elements/ButtonForm";

const stories = {
  title: "ButtonForm",
  component: ButtonForm,
};

export default stories;

export const Login = {
  args: {
    type: "button",
    text: "Login",
    event: () => {},
  },
};

export const Register = {
  args: {
    type: "button",
    text: "Register",
    event: () => {},
  },
};
