// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function User({ children, avatar, name }) {
  return (
    <div className="container flex flex-wrap">
      <img src={avatar} alt="" className="rounded-full w-1/3" />
      <div className="flex flex-col">
        <h2 className="font-semibold mx-3 text-[1.26rem] my-1">{name}</h2>
        {children}
      </div>
    </div>
  );
}

User.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.arrayOf(PropTypes.element),
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default User;
