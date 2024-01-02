/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../fragments/Card';

function CardContainer({ threadList }) {
  return (
    <section className="my-32">
      <h2 className="text-black mx-4 font-semibold text-2xl sm:mx-48">
        Available Discuss
      </h2>
      <div className="container flex flex-wrap sm:mx-44">
        {threadList.length
          ? threadList.map((thread) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Card key={thread.id} id={thread.id} {...thread} />
            ))
          : 'No Data Available'}
      </div>
    </section>
  );
}

CardContainer.propTypes = {
  threadList: PropTypes.array.isRequired,
};

export default CardContainer;
