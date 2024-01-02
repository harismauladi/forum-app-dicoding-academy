/**
 * Scenario test
 *
 * - CategoryCard component
 *  - should toggle background color when user clicked
 *  - should render category name correctly
 *  - button should call the category change handler
 *
 *
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, it, expect, vi,
} from 'vitest';
import CategoryCard from '../../fragments/CategoryCard';

// data dummy
const category = 'dummy';

describe('CategoryCard Component', () => {
  it('should toggle background color when user clicked', async () => {
    // arrange
    let currentCategory = 'set';
    // eslint-disable-next-line no-shadow
    const onChangeCategoryHandler = vi.fn().mockImplementation((category) => {
      currentCategory = currentCategory === category ? '' : category;
    });

    const { rerender } = render(
      <CategoryCard
        categoryName={category}
        categoryChangeHandler={onChangeCategoryHandler}
        currentCategory={currentCategory}
      />,
    );

    const button = screen.getByRole('button');

    // action
    await userEvent.click(button);

    rerender(
      <CategoryCard
        categoryName={category}
        categoryChangeHandler={onChangeCategoryHandler}
        currentCategory={currentCategory}
      />,
    );

    // assert

    expect(button).toHaveClass('bg-slate-50');

    await userEvent.click(button);

    rerender(
      <CategoryCard
        categoryName={category}
        categoryChangeHandler={onChangeCategoryHandler}
        currentCategory={currentCategory}
      />,
    );

    expect(button).not.toHaveClass('bg-slate-50');
  });

  it('should render category name correctly', () => {
    // arrange
    const onCategoryChangeHandler = vi.fn();

    render(
      <CategoryCard
        categoryName={category}
        categoryChangeHandler={onCategoryChangeHandler}
        currentCategory=""
      />,
    );

    // action
    const categoryButton = screen.getByRole('button');

    // assert
    expect(categoryButton).toHaveTextContent(category);
  });

  it('should call the category change handler', async () => {
    // arrange
    const onCategoryChangeHandler = vi.fn();

    render(
      <CategoryCard
        categoryName={category}
        categoryChangeHandler={onCategoryChangeHandler}
        currentCategory=""
      />,
    );

    const categoryButton = screen.getByRole('button');

    // action
    await userEvent.click(categoryButton);

    // assert
    expect(onCategoryChangeHandler).toBeCalledWith(category);
  });
});
