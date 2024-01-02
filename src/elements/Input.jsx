/* eslint-disable react/require-default-props */
import PropTypes from "prop-types";

function Input({
  type, placeholder, id, action, value,
}) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <input
      type={type}
      placeholder={placeholder}
      name={id}
      id={id}
      value={value}
      onChange={action}
      className=" max-w-md shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[8px] placeholder:text-[8px] sm:py-3 sm:px-2 sm:placeholder:text-sm sm:text-[10px]"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
