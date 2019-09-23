/**
 *
 * SocialLogin
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
import makeSelectSocialLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SocialLoginButton from './socialLoginButton';


export function SocialLogin() {
  useInjectReducer({ key: 'socialLogin', reducer });
  useInjectSaga({ key: 'socialLogin', saga });

 const loginSuccess = (response) => {
    console.log("success", response);
    //google,facebook : _profile:{email: "mohibidb@gmail.com",firstName: "Mohibur",id: "118159492201761834379",lastName: "Rahman",name:"Mohibur Rahman"}
    //googel,facebook : _provider:"google", "facebook"
    //
  }
 const loginFailure= (response) => {
    console.log("fail",response);
  }

  return (
    <div className="mt-2">
      <SocialLoginButton loginSuccess={ loginSuccess} loginFailure={loginFailure}  />

    </div>
  );
}

SocialLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  socialLogin: makeSelectSocialLogin(),
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
)(SocialLogin);
