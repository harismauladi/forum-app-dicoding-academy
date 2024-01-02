// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../fragments/CategoryCard';

function HotIssueContainer({
  categoryChangeHandler,
  categories,
  currentCategory,
}) {
  return (
    <section className="my-40">
      <h2 className="text-black mx-4 font-semibold text-2xl sm:mx-48">
        Category
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
  );
}

HotIssueContainer.propTypes = {
  categoryChangeHandler: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default HotIssueContainer;
