import React, { useEffect } from "react";
import LeaderBoardCard from "../fragments/LeaderBoardCard";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";

function LeaderBoards() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);
  return (
    <React.Fragment>
      <section className="my-32">
        <h2 className="text-black mx-4 font-semibold text-2xl sm:mx-48">
          Leaderboards
        </h2>
        <div className="container flex flex-col sm:mx-44 my-5 mx-3">
          {leaderboards.length > 0 ? (
            leaderboards.map((leaderboard, index) => (
              <LeaderBoardCard
                key={leaderboard.user.id}
                index={index}
                avatar={leaderboard.user.avatar}
                name={leaderboard.user.name}
                score={leaderboard.score}
              />
            ))
          ) : (
            <span>There no leaderboards</span>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default LeaderBoards;
