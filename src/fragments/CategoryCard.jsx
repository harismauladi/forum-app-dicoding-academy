/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function CategoryCard({
  categoryName,
  currentCategory,
  categoryChangeHandler,
}) {
  return (
    <button
      className={`category border w-1/3 p-1 rounded-md my-5 mx-3 ${
        currentCategory === categoryName ? "bg-slate-50" : ""
      }`}
      onClick={() => {
        categoryChangeHandler(categoryName);
      }}
    >
      #
      {categoryName}
    </button>
  );
}

CategoryCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  currentCategory: PropTypes.string,
  categoryChangeHandler: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
};
