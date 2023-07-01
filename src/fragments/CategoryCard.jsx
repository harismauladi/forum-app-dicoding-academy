import React from "react";
import PropTypes from "prop-types";

export default function CategoryCard({
  categoryName,
  currentCategory,
  categoryChangeHandler,
}) {
  return (
    <React.Fragment>
      <button
        className={`category border w-1/3 p-1 rounded-md my-5 mx-3 ${
          currentCategory === categoryName ? "bg-slate-50" : ""
        }`}
        onClick={() => {
          categoryChangeHandler(categoryName);
        }}
      >
        #{categoryName}
      </button>
    </React.Fragment>
  );
}

CategoryCard.propTypes = {
  currentCategory: PropTypes.string,
  categoryChangeHandler: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
};
