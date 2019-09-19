import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import './socialLogin.css';

class SocialLoginButton extends Component {
  state = {};

  onSuccessGoogle = () => {
    console.log('success');
  };

  onFailureGoogle = response => {
    console.log('fail', response);
  };

  render() {
    const { loginSuccess, loginFailure } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <GoogleLogin
            clientId="909305170958-gqfn20l33jdp39agblp9dh2t487hsi7p.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy="single_host_origin"
          />
          <FacebookLogin
            appId="421566771930364"
            autoLoad={false}
            textButton="Login with Facebook"
            // cssClass="rounded"
            fields="name,email,picture"
            onClick={this.onSuccessGoogle}
            callback={loginSuccess}
            size="small"
            icon={<FaFacebook size="25px" style={{ marginRight: '5px' }} />}
          />
        </div>
      </div>
    );
  }
}

export default SocialLoginButton;
