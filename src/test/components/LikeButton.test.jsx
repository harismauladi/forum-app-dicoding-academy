/* eslint-disable no-unused-vars */
/**
 * Scenario test
 *
 *  - LikeButoon component
 *
 *  - button should call the vote up handler when user clicked
 *  - button icon should have no color when not voted
 *  - button icon color should be changed when user vote up
 *
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import LikeButton from "../../elements/LikeButton";
import { describe, it, expect, vi } from "vitest";

//data dummy
let isVoted = false;
const color = "#1d90f4";
const className = "text-stone-300";

describe("LikeButton Component", () => {
  it("should call the onVoteUp callback", async () => {
    // arrange
    const onVoteUp = vi.fn();

    render(
      <LikeButton
        onVoteUp={onVoteUp}
        isVoteUp={isVoted}
        className={className}
      />
    );

    const voteUpButtonElement = screen.getByRole("button");

    // action
    await userEvent.click(voteUpButtonElement);

    // assert
    expect(onVoteUp).toBeCalledTimes(1);
  });

  it("should have no color when not voted", () => {
    // arrange
    const onVoteUp = vi.fn();

    render(
      <LikeButton
        onVoteUp={onVoteUp}
        isVoteUp={isVoted}
        className={className}
      />
    );

    // action
    const voteUpButtonElement = screen.getByRole("button");
    const svgElement = voteUpButtonElement.firstChild;

    // assert
    expect(svgElement).toHaveAttribute("fill", "");
  });

  it("should change color when user vote up", async () => {
    // arrange
    const onVoteUp = vi.fn().mockImplementation(() => {
      isVoted = true;
    });

    const { rerender } = render(
      <LikeButton
        onVoteUp={onVoteUp}
        isVoteUp={isVoted}
        className={className}
      />
    );
    const voteUpButtonElement = screen.getByRole("button");
    const svgElement = voteUpButtonElement.firstChild;

    // action
    await userEvent.click(voteUpButtonElement);

    rerender(
      <LikeButton
        onVoteUp={onVoteUp}
        isVoteUp={isVoted}
        className={className}
      />
    );

    // assert
    expect(onVoteUp).toBeCalledTimes(1);
    expect(svgElement).toHaveAttribute("fill", color);
  });
});
