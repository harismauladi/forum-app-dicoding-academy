/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import SendComment from "./SendComment";

function Comment({ comments, threadId }) {
  const { authUser } = useSelector((states) => states);

  return (
    <>
      <SendComment threadId={threadId} />
      <div className="comment flex flex-col max-w-sm w-full my-1">
        <h2 className="text-black mx-4 font-semibold text-2xl  relative right-3 my-1">
          Comment (
          {comments.length}
          )
        </h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              id={comment.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...comment}
              authUser={authUser}
            />
          ))
        ) : (
          <div>
            <span>There no comments</span>
          </div>
        )}
      </div>
    </>
  );
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default Comment;
