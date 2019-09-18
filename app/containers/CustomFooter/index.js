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
import StickyFooter from 'react-sticky-footer';

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
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: "#999999",
        padding: "2rem"
      }}
      stickyStyles={{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem"
      }}
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-2">
            <h4 className="text-light">Footer</h4>
          </div>
        </div>
      </div>
    </StickyFooter>
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
