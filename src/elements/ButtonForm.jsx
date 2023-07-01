// import React from 'react'
import PropTypes from "prop-types";

function ButtonForm({ type, event, text }) {
  return (
    <button
      type={type}
      onClick={() => event()}
      className="w-full bg-blue-500 font-bold rounded-md my-2 p-1 hover:bg-blue-800 text-xs sm:text-xl"
    >
      {text}
    </button>
  );
}

ButtonForm.propTypes = {
  type: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonForm;
