import React from "react";
import Card from "../fragments/Card";
import PropTypes from "prop-types";

function CardContainer({ threadList }) {
  return (
    <React.Fragment>
      <section className="my-32">
        <h2 className="text-black mx-4 font-semibold text-2xl sm:mx-48">
          Available Discuss
        </h2>
        <div className="container flex flex-wrap sm:mx-44">
          {threadList.length
            ? threadList.map((thread) => (
                <Card key={thread.id} id={thread.id} {...thread} />
              ))
            : "No Data Available"}
        </div>
      </section>
    </React.Fragment>
  );
}

CardContainer.propTypes = {
  threadList: PropTypes.array.isRequired,
};

export default CardContainer;
