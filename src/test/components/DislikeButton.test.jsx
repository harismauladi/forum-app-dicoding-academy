/* eslint-disable no-unused-vars */
/**
 * Scenario test
 *
 *  - LikeButoon component
 *
 *  - button should call the vote down handler when user clicked
 *  - button icon should have no color when not voted
 *  - button icon color should be changed when user vote up
 *
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import {
  describe, it, expect, vi,
} from "vitest";
import DislikeButton from "../../elements/DislikeButton";

// data dummy
let isVoted = false;
const color = "#1d90f4";
const className = "text-stone-300";

describe("DislikeButton Component", () => {
  it("should call the onVoteDown callback", async () => {
    // arrange
    const onVoteDown = vi.fn();

    render(
      <DislikeButton
        onVoteDown={onVoteDown}
        isVoteDown={isVoted}
        className={className}
      />,
    );

    const voteDownButtonElement = screen.getByRole("button");

    // action
    await userEvent.click(voteDownButtonElement);

    // assert
    expect(onVoteDown).toBeCalledTimes(1);
  });

  it("should have no color when not voted", () => {
    // arrange
    const onVoteDown = vi.fn();

    render(
      <DislikeButton
        onVoteDown={onVoteDown}
        isVoteDown={isVoted}
        className={className}
      />,
    );

    // action
    const voteDownButtonElement = screen.getByRole("button");
    const svgElement = voteDownButtonElement.firstChild;

    // assert
    expect(svgElement).toHaveAttribute("fill", "");
  });

  it("should change color when user vote down", async () => {
    // arrange
    const onVoteDown = vi.fn().mockImplementation(() => {
      isVoted = true;
    });

    const { rerender } = render(
      <DislikeButton
        onVoteDown={onVoteDown}
        isVoteDown={isVoted}
        className={className}
      />,
    );
    const voteDownButtonElement = screen.getByRole("button");
    const svgElement = voteDownButtonElement.firstChild;

    // action
    await userEvent.click(voteDownButtonElement);

    rerender(
      <DislikeButton
        onVoteDown={onVoteDown}
        isVoteDown={isVoted}
        className={className}
      />,
    );

    // assert
    expect(onVoteDown).toBeCalledTimes(1);
    expect(svgElement).toHaveAttribute("fill", color);
  });
});
