/**
 *
 * Asynchronously loads the component for ViewUsers
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
