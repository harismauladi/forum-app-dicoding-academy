import PropTypes from 'prop-types';

function LabelInput({ htmlFor, children }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <label htmlFor={htmlFor} className="font-bold text-[15px] sm:text-2xl">
      {children}
    </label>
  );
}

LabelInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default LabelInput;
