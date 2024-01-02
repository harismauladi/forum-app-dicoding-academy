// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function LeaderBoardCard({ avatar, name, score }) {
  return (
    <div className="cardLeaderBoard w-full shadow-lg rounded-md p-5 sm:max-w-7xl max-w-md my-2">
      <div className="container flex flex-wrap">
        <img src={avatar} alt="" className="rounded-full" />
        <div className="flex flex-col">
          <h2 className="font-semibold mx-3 text-[1.26rem] my-1">{name}</h2>
          <p className="mx-3 text-xs opacity-75">
            Total Point :
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}
LeaderBoardCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default LeaderBoardCard;
