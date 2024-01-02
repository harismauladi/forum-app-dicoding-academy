/* eslint-disable consistent-return */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { postedAt } from "../utils";
import ReplyButton from "../elements/ReplyButton";
import LikeButton from "../elements/LikeButton";
import { asyncNeutralizeVoteThread } from "../states/shared/action";
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from "../states/threads/action";
import DislikeButton from "../elements/DislikeButton";

function Card({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  user,
  upVotesBy,
  downVotesBy,
}) {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const isVoteUp = upVotesBy.includes(authUser?.id);
  const isVoteDown = downVotesBy.includes(authUser?.id);

  // eslint-disable-next-line no-shadow
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  function onUpVoteThread() {
    if (authUser === null) {
      return alert("Please Re-Login");
    }
    if (isVoteUp) {
      return dispatch(asyncNeutralizeVoteThread({ threadId: id, isVoteUp }));
    }

    dispatch(asyncUpVoteThread({ threadId: id, isVoteDown }));
  }

  function onDownVoteThread() {
    if (authUser === null) {
      return alert("Please Re-Login");
    }
    if (isVoteDown) {
      return dispatch(asyncNeutralizeVoteThread({ threadId: id }));
    }

    dispatch(asyncDownVoteThread({ threadId: id, isVoteUp }));
  }

  return (
    <div className="card rounded-[32px] p-5 shadow-lg max-w-[15rem] mx-4 my-1">
      <div className="category border w-1/2 p-1 rounded-md">
        <h2 className="justify-center items-center flex text-[12px] my-1">
          #
          {category}
        </h2>
      </div>
      <div className="title font-semibold my-1 text-lg">
        <Link to={`/threads/${id}`}>
          <h1>{title}</h1>
        </Link>
      </div>
      <div className="body my-1 text-sm">{parse(limit(body, 100))}</div>
      <div className="time my-1 justify-end items-end flex text-xs opacity-40">
        <p>
          Created by
          {' '}
          {user.name}
          {' '}
          {postedAt(createdAt)}
        </p>
      </div>
      <div className="action flex flex-row  w-full">
        <LikeButton
          isVoteUp={isVoteUp}
          onVoteUp={onUpVoteThread}
          className="flex flex-row items-center mx-2"
        >
          <h2 className="text-xs flex items-center">{upVotesBy.length}</h2>
        </LikeButton>
        <DislikeButton
          isVoteDown={isVoteDown}
          onVoteDown={onDownVoteThread}
          className="flex flex-row items-center mx-2 relative top-[2px]"
        >
          <h2 className="text-xs my-2 flex items-center mx-2">
            {downVotesBy.length}
          </h2>
        </DislikeButton>
        <ReplyButton value={totalComments} threadId={id} />
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};

export default Card;
