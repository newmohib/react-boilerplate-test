/*
 *
 * Signup actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGNUP_INPUT,
  SIGNUP_SUBMIT,
  SIGNUP_SUBMIT_SUCCESS,
  SIGNUP_SUBMIT_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signupSubmit() {
  return {
    type: SIGNUP_SUBMIT,
  };
}

export function onChangeSignupInput(inputObj) {
  // console.log('Login actions success',inputObj);
  return {
    type: SIGNUP_INPUT,
    inputObj
  };
}
