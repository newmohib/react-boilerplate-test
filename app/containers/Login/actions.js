/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, LOGIN_SUBMIT, LOGIN_INPUT, GET_USERS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
};


export function getUsers(users) {
  // console.log('Login actions success',users);
  return {
    type: GET_USERS,
    users
  };
}

export function loginSubmit() {
  return {
    type: LOGIN_SUBMIT,
  };
}

export function onChangeLoginInput(inputObj) {
  // console.log('Login actions success',inputObj);
  return {
    type: LOGIN_INPUT,
    inputObj
  };
}
