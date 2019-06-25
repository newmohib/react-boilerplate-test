import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sideBar state domain
 */

const selectSideBarDomain = state => state.sideBar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SideBar
 */
//sidebarOpen
const makeSelectSideBar = () =>
  createSelector(
    selectSideBarDomain,
    substate => substate,
  );

  const makeSelectSidebarOpen = () =>
  createSelector(
    selectSideBarDomain,
    substate => substate.sidebarOpen,
  );

export default makeSelectSideBar;
export { selectSideBarDomain,makeSelectSidebarOpen };
