import React from "react";
import CommentCard from "./CommentCard";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import SendComment from "./SendComment";

function Comment({ comments, threadId }) {
  const { authUser } = useSelector((states) => states);

  return (
    <React.Fragment>
      <SendComment threadId={threadId} />
      <div className="comment flex flex-col max-w-sm w-full my-1">
        <h2 className="text-black mx-4 font-semibold text-2xl  relative right-3 my-1">
          Comment ({comments.length})
        </h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              id={comment.id}
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
    </React.Fragment>
  );
}

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default Comment;
