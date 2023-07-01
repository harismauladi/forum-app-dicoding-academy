import React from "react";
import PropTypes from "prop-types";

function LeaderBoardCard({ avatar, name, score }) {
  return (
    <React.Fragment>
      <div className="cardLeaderBoard w-full shadow-lg rounded-md p-5 sm:max-w-7xl max-w-md my-2">
        <div className="container flex flex-wrap">
          <img src={avatar} alt="" className="rounded-full" />
          <div className="flex flex-col">
            <h2 className="font-semibold mx-3 text-[1.26rem] my-1">{name}</h2>
            <p className="mx-3 text-xs opacity-75">Total Point : {score}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
LeaderBoardCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default LeaderBoardCard;
