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
      <div
        className="container form-wrapper"
        style={{ height: 'calc(100vh - 65px)' }}
      >
        <div className="row justify-content-center h-100">
          <div className="col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">
              
              <div className="container">
              <h3 className="text-center headerStyle"><FormattedMessage {...messages.header} /></h3>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
