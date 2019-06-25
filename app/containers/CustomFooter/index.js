/**
 *
 * CustomFooter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCustomFooter from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function CustomFooter() {
  useInjectReducer({ key: 'customFooter', reducer });
  useInjectSaga({ key: 'customFooter', saga });

  return (
    <div
        className="bg-primary"
        style={{
          position: 'absolute',
          bottom: '0px',
          height: '50px',
          width: '100%',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">
              <h1>Footer</h1>
            </div>
          </div>
        </div>
      </div>
  );
}

CustomFooter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customFooter: makeSelectCustomFooter(),
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
)(CustomFooter);
