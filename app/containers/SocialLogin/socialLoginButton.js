import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class SocialLoginButton extends Component {
    state = {}

    onSuccessGoogle = (response) => {
        console.log("success", response);
      }
      onFailureGoogle = (response) => {
        console.log("fail",response);
      }
    render() {
        const {loginSuccess,loginFailure}=this.props
        return (
            <div>
                <GoogleLogin
                    clientId="909305170958-gqfn20l33jdp39agblp9dh2t487hsi7p.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={loginSuccess}
                    onFailure={loginFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default SocialLoginButton;