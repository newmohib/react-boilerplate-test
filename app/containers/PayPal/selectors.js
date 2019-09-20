import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the payPal state domain
 */

const selectPayPalDomain = state => state.payPal || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PayPal
 */

const makeSelectPayPal = () =>
  createSelector(
    selectPayPalDomain,
    substate => substate,
  );

export default makeSelectPayPal;
export { selectPayPalDomain };
