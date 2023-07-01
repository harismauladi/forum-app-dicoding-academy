import React from "react";
import LikeButton from "../elements/LikeButton";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import {
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
  asyncUpVoteComment,
} from "../states/threadDetail/action";
import { postedAt } from "../utils";
import DislikeButton from "../elements/DislikeButton";

function CommentCard({
  id,
  owner,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const { id: threadId } = useParams();
  const dispatch = useDispatch();
  const isVoteUp = upVotesBy?.includes(authUser?.id);
  const isVoteDown = downVotesBy?.includes(authUser?.id);

  async function onVoteUpComment() {
    if (authUser === null) {
      throw new Error("Please Re-Login or Login First");
    }

    if (isVoteUp) {
      return dispatch(
        asyncNeutralizeVoteComment({ threadId, commentId: id, isVoteUp })
      );
    }
    dispatch(asyncUpVoteComment({ threadId, commentId: id, isVoteDown }));
  }

  function onDownUpComment() {
    if (authUser === null) {
      throw new Error("Please Re-Login or Login First");
    }

    if (isVoteDown) {
      return dispatch(asyncNeutralizeVoteComment({ threadId, commentId: id }));
    }
    dispatch(asyncDownVoteComment({ threadId, commentId: id, isVoteDown }));
  }

  return (
    <React.Fragment>
      <div className="flex flex-col max-w-sm p-4 rounded-md shadow-md my-1">
        <div className="commentcontainer flex flex-row p-1">
          <div className="w-1/12 relative right-1 ">
            <img src={owner?.avatar} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-semibold ">{owner?.name}</h1>
          </div>
        </div>
        <div>
          <p className="text-sm">{parse(content)}</p>

          <div className="time my-1 justify-end items-end flex">
            <p className="text-xs opacity-75">{postedAt(createdAt)}</p>
          </div>
        </div>
        <div className="action flex flex-row p-1 my-1 border border-t-gray-400 border-r-0 border-l-0 border-b-gray-400">
          <LikeButton
            onVoteUp={onVoteUpComment}
            isVoteUp={isVoteUp}
            className={" flex flex-row items-center mx-2"}
          >
            <h2 className="text-lg mx-2 flex items-center">
              {upVotesBy.length}
            </h2>
          </LikeButton>
          <DislikeButton
            onVoteDown={onDownUpComment}
            isVoteDown={isVoteDown}
            className={"flex flex-row items-center mx-2"}
          >
            <h2 className="text-lg flex items-center">{downVotesBy.length}</h2>
          </DislikeButton>
        </div>
      </div>
    </React.Fragment>
  );
}

CommentCard.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default CommentCard;
