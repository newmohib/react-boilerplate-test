/*
 * CustomFooter Messages
 *
 * This contains all the text for the CustomFooter container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CustomFooter';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CustomFooter container!',
  },
});
