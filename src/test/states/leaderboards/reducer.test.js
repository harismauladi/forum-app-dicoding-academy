/**
 * Scenario test
 *
 * - leaderboardsReducer
 *  - should return initial state when given action type UNKNOWN
 *  - should return leaderboards data when given action type RECEIVE_LEADERBOARDS
 */

import leaderboardsReducer from "../../../states/leaderboards/reducer";
import { describe, it, expect } from "vitest";

const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
  {
    user: {
      id: "users-2",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 5,
  },
];

describe("leaderboardsReducer Reducer Function Test", () => {
  it("should return initial state when given action type UNKNOWN", () => {
    //arrange
    const setInitialState = [];

    const action = { type: "UNKNOWN" };

    // action
    const nextState = leaderboardsReducer(setInitialState, action);

    // assert
    expect(nextState).toEqual(setInitialState);
  });

  it("should return leaderboards data when given by RECEIVE_LEADERBOARDS action", () => {
    // arrange
    const setInitialState = [];
    const action = {
      type: "RECEIVE_LEADERBOARDS",
      payload: {
        leaderboards: fakeLeaderboardsResponse,
      },
    };

    // action
    const nextState = leaderboardsReducer(setInitialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
