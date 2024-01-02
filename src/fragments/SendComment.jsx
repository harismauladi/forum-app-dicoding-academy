// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useInput } from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';

function SendComment({ threadId }) {
  const [content, onCommentHandler] = useInput('');
  const dispatch = useDispatch();

  function addComment(event) {
    event.preventDefault();

    dispatch(asyncAddComment({ threadId, content }));
  }

  return (
    <div className="sendComment flex flex-col max-w-sm w-full my-1">
      <h2 className="text-black mx-4 font-semibold text-2xl relative right-3 ">
        Send Comment
      </h2>
      <textarea
        className="border w-full  h-52 border-gray-300 p-4 rounded-md my-2 "
        onChange={onCommentHandler}
        value={content}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 font-bold rounded-md my-2 p-1 hover:bg-blue-800 text-xl sm:text-xl text-white "
        onClick={addComment}
      >
        Send
      </button>
    </div>
  );
}

SendComment.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default SendComment;
