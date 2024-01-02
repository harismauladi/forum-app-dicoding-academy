/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Input from "../elements/Input";
import LabelInput from "../elements/LabelInput";

function InputForm({
  type, placeHolder, id, htmlFor, text, action, value,
}) {
  return (
    <div className="mb-2">
      <LabelInput htmlFor={htmlFor}>{text}</LabelInput>
      {' '}
      <br />
      <Input
        type={type}
        placeholder={placeHolder}
        id={id}
        action={action}
        value={value}
      />
    </div>
  );
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputForm;
