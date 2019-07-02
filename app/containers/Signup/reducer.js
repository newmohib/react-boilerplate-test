/*
 *
 * Signup reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SIGNUP_INPUT,
  SIGNUP_SUBMIT,
  SIGNUP_SUBMIT_SUCCESS,
  SIGNUP_SUBMIT_ERROR
} from './constants';

export const initialState = {
  signupInput: {}
};

/* eslint-disable default-case, no-param-reassign */
const signupReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGNUP_INPUT:
        //console.log('signup change: ', action.inputObj);
        draft.signupInput = action.inputObj
        break;
    }
  });

export default signupReducer;
