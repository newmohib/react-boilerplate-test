/**
 *
 * Logout
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// custom
import { makeSelectIsAuthorization } from '../App/selectors';
import { getFromStore, removeToLocalStorage } from '../../utils/localstorage';
import { setAuthorizationToken } from '../App/actions';

export function Logout(props) {
  useInjectReducer({ key: 'logout', reducer });
  useInjectSaga({ key: 'logout', saga });

  const { setAuthorToken, isAuthorization, history } = props;

  useEffect(() => {
    // if (isAuthorization) {
    //   history.push("/");
    // }

    if (isAuthorization) {
      props.setAuthorToken(null);
      const getAuthorizationTokenToLocalstorage = getFromStore(
        'isAuthorization',
      );
      if (getAuthorizationTokenToLocalstorage) {
        removeToLocalStorage('isAuthorization');
        history.push('/login');
      }
      // else {
      //   history.push("/login");
      // }
    } else if (isAuthorization === null) {
      console.log('isautho null');
      history.push('/login');
    }
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logout: makeSelectLogout(),
  isAuthorization: makeSelectIsAuthorization(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setAuthorToken: value => dispatch(setAuthorizationToken(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Logout);
