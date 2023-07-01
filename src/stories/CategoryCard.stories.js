import React from "react";
import CategoryCard from "../fragments/CategoryCard";

const story = {
  title: "Category Button",
  component: CategoryCard,
};

export default story;

export const Primary = {
  args: {
    categoryName: "Primary",
    currentCategory: "",
    categoryChangeHandler: () => {},
  },
};

export const Secondary = {
  args: {
    categoryName: "Secondary",
    currentCategory: "Secondary",
    categoryChangeHandler: () => {},
  },
};
