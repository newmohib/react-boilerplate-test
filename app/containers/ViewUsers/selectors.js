import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewUsers state domain
 */

const selectViewUsersDomain = state => state.viewUsers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ViewUsers
 */

const makeSelectViewUsers = () =>
  createSelector(
    selectViewUsersDomain,
    substate => substate,
  );

export default makeSelectViewUsers;
export { selectViewUsersDomain };
