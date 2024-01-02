// import React from 'react'
import PropTypes from 'prop-types';

function ButtonForm({ type, event, text }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={() => event()}
      className="w-40 bg-blue-500 font-bold rounded-md my-2 p-0 hover:bg-blue-800 text-xs sm:text-xl"
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
