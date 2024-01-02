/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AuthLayout({
  children, type, imageIcon, styleImage,
}) {
  return (
    <div className="formContainer font-poppins flex justify-center min-h-screen items-center bg-secondary text-white w-full">
      <div className="w-full max-w-4xl flex">
        <div className="form bg-primary p-8 w-[35%] ">
          <h1 className="justify-center items-center flex font-bold text-[18px] mb-7 sm:text-[48px] sm:mb-10">
            {type === "login" ? "Sign In" : "Sign Up"}
          </h1>
          {children}
          {type === "login" ? (
            <p className="text-[4px] justify-center items-center w-full mx-1 sm:text-[10px] sm:mx-6">
              Dont Have an Accont ?
              {" "}
              <Link to="/register" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-[4px] justify-center items-center w-full mx-1 sm:text-[10px] sm:mx-6">
              Have an Accont ?
              {" "}
              <Link to="/login" className="text-blue-600">
                Sign In
              </Link>
            </p>
          )}
        </div>
        <div className="image block bg-white w-[709px]">
          <img src={imageIcon} alt="" className={styleImage} />
        </div>
      </div>
    </div>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  type: PropTypes.string.isRequired,
  imageIcon: PropTypes.string.isRequired,
  styleImage: PropTypes.string.isRequired,
};

export default AuthLayout;
