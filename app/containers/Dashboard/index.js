/**
 *
 * Dashboard
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
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PayPalButton from '../PayPal';

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <div
        className="container form-wrapper"
        style={{ height: 'calc(100vh - 65px)' }}
      >
        <div className="row justify-content-center h-100">
          <div className="col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">

              <div className="container">
                <h3 className="text-center headerStyle"><FormattedMessage {...messages.header} /></h3>
                <PayPalButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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
)(Dashboard);
