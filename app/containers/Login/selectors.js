import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

  const makeSelectUsers = () =>
  createSelector(
    selectLoginDomain,
    substate => { 
     // console.log('selector',substate.users);
       return substate.users},
  );

  const makeSelectLoginInput = () =>
  createSelector(
    selectLoginDomain,
    substate => { 
      // console.log('login selector',substate.loginInput);
        return substate.loginInput},
  );

export default makeSelectLogin;
export { selectLoginDomain , makeSelectUsers,makeSelectLoginInput };
