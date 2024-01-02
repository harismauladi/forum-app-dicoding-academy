/**
 * Scenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when success fetch api
 *  - should call alert when getLeaderboards api error
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import API from '../../../utils/api';
import showAlert from '../../../utils/alert';
import {
  asyncReceiveLeaderboards,
  receiveLeaderboardsActionCreator,
} from '../../../states/leaderboards/action';

// data dummy
const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErorResponse = new Error('Fetch Api failed');

describe('asyncReceiveLeaderboards Thunk Function Test', () => {
  beforeEach(() => {
    vi.mock('../../../utils/api');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when success fetch api', async () => {
    // arrange
    API.getLeaderboards.mockResolvedValue(fakeLeaderboardsResponse);

    const spyOnGetLeaderboardsApi = vi.spyOn(API, 'getLeaderboards');
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyOnGetLeaderboardsApi).toBeCalled();
    expect(dispatch).toBeCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toBeCalledWith(hideLoading());
  });

  it('should call alert when getLeaderboards api error', async () => {
    // arrange
    API.getLeaderboards.mockRejectedValue(fakeErorResponse);

    const spyOnGetLeaderboardsApi = vi.spyOn(API, 'getLeaderboards');
    const spyOnAlertEror = vi.spyOn(showAlert, 'alertMassage');
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyOnGetLeaderboardsApi).toBeCalled();
    expect(dispatch).not.toBeCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(spyOnAlertEror).toBeCalledWith(fakeErorResponse.message);
    expect(dispatch).toBeCalledWith(hideLoading());
  });
});
