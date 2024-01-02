/**
 * Scenario test
 *
 * - authUserReducer
 *  - should return initialState when given action type UNKNOWN
 *  - should return auth user when given action type SET_AUTH_USER
 *  - should clear state when given action type UNSET_AUTH_USER
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from '../../../states/authUser/reducer';

describe('authUserReducer Reducer Function Test', () => {
  it('should return initial state when given action type UNKNWON', () => {
    // arrange
    const setInitialState = null;
    const actionType = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(setInitialState, actionType);

    // assert
    expect(nextState).toEqual(setInitialState);
  });

  it('should return auth user when given action type SET_AUTH_USER', () => {
    // arrange
    const setInitialState = null;
    const authUser = {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: 'SET_AUTH_USER', payload: { authUser } };

    // action
    const nextState = authUserReducer(setInitialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should clear state when given by UNSET_AUTH_USER action', () => {
    // arrange
    const setInitialState = {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };
    const action = { type: 'UNSET_AUTH_USER' };

    // action
    const nextState = authUserReducer(setInitialState, action);

    // assert
    expect(nextState).toBeNull();
  });
});
