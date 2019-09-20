/**
 *
 * Asynchronously loads the component for PayPal
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
