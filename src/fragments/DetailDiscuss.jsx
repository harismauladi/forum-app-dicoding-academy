// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import LikeButton from '../elements/LikeButton';
import { postedAt } from '../utils';
import DislikeButton from '../elements/DislikeButton';

function DetailDiscuss({
  thread,
  onUpVoteThreadDetail,
  onDownVoteThreadDetail,
  isVoteUp,
  isVoteDown,
}) {
  return (
    <div className="flex flex-col max-w-sm min-w-[24rem]">
      <h1 className="text-3xl font-semibold my-1">{thread.title}</h1>
      <div className="text-sm">{parse(thread.body)}</div>
      <div className="time my-1 justify-end items-end flex">
        <p className="text-xs opacity-75">{postedAt(thread.createdAt)}</p>
      </div>
      <div className="action flex flex-row my-1 border border-t-gray-400 border-r-0 border-l-0 border-b-gray-400 w-full">
        <LikeButton
          isVoteUp={isVoteUp}
          onVoteUp={onUpVoteThreadDetail}
          className="container flex flex-wrap items-center relative left-3"
        >
          <h2 className="text-lg mx-2 flex items-center">
            {thread.upVotesBy.length}
          </h2>
        </LikeButton>
        <DislikeButton
          isVoteDown={isVoteDown}
          onVoteDown={onDownVoteThreadDetail}
          className="container flex flex-wrap items-center relative left-3"
        >
          <h2 className="text-lg my-[4px] mx-2 items-center flex">
            {thread.downVotesBy.length}
          </h2>
        </DislikeButton>

        <p className=" text-xs opacity-75 flex items-center w-2/3 relative right-5">
          {' '}
          Created By
        </p>
        <div className="container flex flex-row items-center">
          <img
            src={thread.owner.avatar}
            alt=""
            className="w-1/3 h-2/3 rounded-full flex items-center"
          />
          <h2 className="font-semibold mx-3 text-[15px] flex items-center">
            {thread.owner.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

DetailDiscuss.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  thread: PropTypes.object.isRequired,
  onUpVoteThreadDetail: PropTypes.func.isRequired,
  onDownVoteThreadDetail: PropTypes.func.isRequired,
  isVoteDown: PropTypes.bool.isRequired,
  isVoteUp: PropTypes.bool.isRequired,
};

export default DetailDiscuss;
