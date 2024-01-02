/**
 * Scenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when api login success
 *  - should call alert when api error
 */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  describe, it, expect, beforeEach, vi, afterEach,
} from "vitest";
import API from "../../../utils/api";
import {
  asyncSetAuthUser,
  setAuthUserActionCreator,
} from "../../../states/authUser/action";
import showAlert from "../../../utils/alert";

// data dummy

const fakeLoginResponse = "test-token";
const fakeErorResponse = new Error("Fetch Api failed");
const user = {
  id: "users-1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

describe("asyncSetAuthUser Thunk Function Test", () => {
  beforeEach(() => {
    vi.mock("../../../utils/api");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(" should dispatch action correctly when api login success", async () => {
    // arrange
    API.login.mockResolvedValue(fakeLoginResponse);
    API.getOwnProfile.mockResolvedValue(user);

    const spyOnLoginAPI = vi.spyOn(API, "login");
    const spyOnSetAccessToken = vi.spyOn(API, "putAccessToken");
    const spyOnGetUserProfile = vi.spyOn(API, "getOwnProfile");
    const spyOnAlertEror = vi.spyOn(showAlert, "alertMassage");
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: user.email, password: "password" })(
      dispatch,
    );

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyOnLoginAPI).toBeCalledWith({
      email: user.email,
      password: "password",
    });
    expect(spyOnSetAccessToken).toBeCalledWith(fakeLoginResponse);
    expect(spyOnGetUserProfile).toBeCalled();
    expect(dispatch).toBeCalledWith(setAuthUserActionCreator(user));
    expect(spyOnAlertEror).not.toBeCalled();
    expect(dispatch).toBeCalledWith(hideLoading());
  });

  it("should call alert when api erorr", async () => {
    // arrange
    API.login.mockRejectedValue(fakeErorResponse);

    const spyOnAlertEror = vi.spyOn(showAlert, "alertMassage");
    const spyOnLoginAPI = vi.spyOn(API, "login");
    const spyOnSetAccessToken = vi.spyOn(API, "putAccessToken");
    const spyOnGetUserProfile = vi.spyOn(API, "getOwnProfile");
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: user.email, password: "password" })(
      dispatch,
    );

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyOnLoginAPI).toBeCalledWith({
      email: user.email,
      password: "password",
    });
    expect(spyOnSetAccessToken).not.toBeCalled();
    expect(spyOnGetUserProfile).not.toBeCalled();
    expect(dispatch).not.toBeCalledWith(setAuthUserActionCreator(user));
    expect(spyOnAlertEror).toBeCalled();
    expect(dispatch).toBeCalledWith(hideLoading());
  });
});
