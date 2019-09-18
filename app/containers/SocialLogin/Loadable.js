/**
 *
 * Asynchronously loads the component for SocialLogin
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
