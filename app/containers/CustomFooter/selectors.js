import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customFooter state domain
 */

const selectCustomFooterDomain = state => state.customFooter || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomFooter
 */

const makeSelectCustomFooter = () =>
  createSelector(
    selectCustomFooterDomain,
    substate => substate,
  );

export default makeSelectCustomFooter;
export { selectCustomFooterDomain };
