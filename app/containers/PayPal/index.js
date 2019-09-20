/**
 *
 * PayPal
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
import makeSelectPayPal from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PaypalButton from './paypalButton';

export function PayPal() {
  useInjectReducer({ key: 'payPal', reducer });
  useInjectSaga({ key: 'payPal', saga });

  return (
    <div>
      <Helmet>
        <title>PayPal</title>
        <meta name="description" content="Description of PayPal" />
      </Helmet>
      <PaypalButton />
    </div>
  );
}

PayPal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  payPal: makeSelectPayPal(),
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
)(PayPal);
