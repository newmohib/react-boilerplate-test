/**
 *
 * ViewUsers
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectViewUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ViewUsers() {
  useInjectReducer({ key: 'viewUsers', reducer });
  useInjectSaga({ key: 'viewUsers', saga });

  return (
    <div>
      <Helmet>
        <title>ViewUsers</title>
        <meta name="description" content="Description of ViewUsers" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ViewUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewUsers: makeSelectViewUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewUsers);
