import React from "react";
import CategoryCard from "../fragments/CategoryCard";
import PropTypes from "prop-types";

function HotIssueContainer({
  categoryChangeHandler,
  categories,
  currentCategory,
}) {
  return (
    <React.Fragment>
      <section className="my-40">
        <h2 className="text-black mx-4 font-semibold text-2xl sm:mx-48">
          Hot Issue
        </h2>
        <div className="container flex flex-wrap sm:mx-44">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category}
                categoryName={category}
                currentCategory={currentCategory}
                categoryChangeHandler={categoryChangeHandler}
              />
            ))
          ) : (
            <span className="whitespace-nowrap text-vampire-bite">
              There no categories.
            </span>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

HotIssueContainer.propTypes = {
  categoryChangeHandler: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default HotIssueContainer;
