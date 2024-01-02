// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ReplyButton({ value, threadId }) {
  const navigate = useNavigate();

  const onCommentClick = () => {
    navigate(`/threads/${threadId}`);
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="container flex flex-row items-center"
      onClick={onCommentClick}
    >
      <img src="./commentIcon.png" alt="" className="w-[24%]" />
      <h2 className="text-xs my-1 mx-2">{value}</h2>
    </button>
  );
}
ReplyButton.propTypes = {
  value: PropTypes.number.isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ReplyButton;
