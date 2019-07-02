import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signup state domain
 */

const selectSignupDomain = state => state.signup || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Signup
 */

const makeSelectSignup = () =>
  createSelector(
    selectSignupDomain,
    substate => substate,
  );

  const makeSelectSignupInput = () =>
  createSelector(
    selectSignupDomain,
    substate => { 
      // console.log('login selector',substate.signupInput);
        return substate.signupInput},
  );

export default makeSelectSignup;
export { selectSignupDomain , makeSelectSignupInput };
