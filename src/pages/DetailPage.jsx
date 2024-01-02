/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailDiscuss from '../fragments/DetailDiscuss';
import Comment from '../fragments/Comment';
import {
  asyncDownVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';
import { asyncNeutralizeVoteThread } from '../states/shared/action';
import NotFound from './NotFound';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const isVoteUp = threadDetail?.upVotesBy?.includes(authUser?.id);
  const isVoteDown = threadDetail?.downVotesBy?.includes(authUser?.id);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  // eslint-disable-next-line consistent-return
  function onUpVoteThreadDetail() {
    if (authUser.null) {
      throw new Error('Please Re-Login or Login First');
    }
    if (isVoteUp) {
      return dispatch(asyncNeutralizeVoteThread({ threadId: id, isVoteUp }));
    }

    dispatch(asyncUpVoteThreadDetail(isVoteDown));
  }

  // eslint-disable-next-line consistent-return
  function onDownVoteThreadDetail() {
    if (authUser.null) {
      throw new Error('Please Re-Login or Login First');
    }

    if (isVoteDown) {
      return dispatch(asyncNeutralizeVoteThread({ threadId: id }));
    }

    dispatch(asyncDownVoteThreadDetail(isVoteUp));
  }

  if (threadDetail === null) {
    return <NotFound />;
  }

  return (
    <section className="my-32 flex flex-col justify-center items-center p-3">
      <DetailDiscuss
        thread={threadDetail}
        onUpVoteThreadDetail={onUpVoteThreadDetail}
        onDownVoteThreadDetail={onDownVoteThreadDetail}
        isVoteUp={isVoteUp}
        isVoteDown={isVoteDown}
      />

      <Comment comments={threadDetail.comments} threadId={id} />
    </section>
  );
}

export default DetailPage;
