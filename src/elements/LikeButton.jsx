/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function LikeButton({
  children, isVoteUp, onVoteUp, className,
}) {
  return (
    <button className={className} onClick={onVoteUp}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="like"
        fill={isVoteUp ? "#1d90f4" : ""}
        height={28}
      >
        <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z" />
      </svg>
      {children}
    </button>
  );
}

LikeButton.propTypes = {
  children: PropTypes.object,
  // eslint-disable-next-line react/no-unused-prop-types
  fill: PropTypes.string,
  isVoteUp: PropTypes.bool.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LikeButton;
