import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the socialLogin state domain
 */

const selectSocialLoginDomain = state => state.socialLogin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SocialLogin
 */

const makeSelectSocialLogin = () =>
  createSelector(
    selectSocialLoginDomain,
    substate => substate,
  );

export default makeSelectSocialLogin;
export { selectSocialLoginDomain };
