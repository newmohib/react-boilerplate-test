import React, { Component } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import  {googleClientId,facebookAppid}  from "../../config";
import CustomSocialButton from './customSocialButton'
import './socialLogin.css';

class SocialLoginButton extends Component {
    state = {};
    onSuccessGoogle = () => {
        console.log('success');
    };

    render() {
        console.log(process.env.GOOGLE_CLIENTID);
        const { loginSuccess, loginFailure } = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText="Log in with Google"
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <FacebookLogin
                        appId={facebookAppid}
                        autoLoad={false}
                        textButton="Log in with Facebook"
                        cssClass="kep-login-facebook"
                        fields="name,email,picture"
                        //onClick={this.onSuccessGoogle}
                        callback={loginSuccess}
                        size="small"
                        icon={<FaFacebook size="25px" style={{ marginRight: '5px', color: '#4c69ba' }} />}
                    />
                    {/* <GoogleLogout
                        clientId="909305170958-gqfn20l33jdp39agblp9dh2t487hsi7p.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >
                    </GoogleLogout> */}

                </div>
                {/* <div className="row justify-content-center mt-4">
                    <div className="col-6">
                        <CustomSocialButton
                            provider='facebook'
                            gatekeeper='http://localhost:3000'
                            appId='421566771930364'
                            redirect='http://localhost:3000'
                            onLoginSuccess={loginSuccess}
                            onLoginFailure={loginFailure}
                        >
                            <FaFacebook size="25px" style={{ marginRight: '5px', color: '#4c69ba' }} />
                            Login with Facebook
                     </CustomSocialButton>
                    </div>
                    <div className="col-6">
                        <CustomSocialButton
                            provider='google'
                            appId='909305170958-gqfn20l33jdp39agblp9dh2t487hsi7p.apps.googleusercontent.com'
                            onLoginSuccess={loginSuccess}
                            onLoginFailure={loginFailure}
                            key={'linkedin'}
                        >
                            <FaGoogle size="25px" style={{ marginRight: '5px', color: '#4885ed' }} />
                            Login with Google
                    </CustomSocialButton>

                    </div>
                </div> */}

                {/* <div className="row justify-content-center mt-2">
                    <div className="col-6">
                        <CustomSocialButton
                            provider='github'
                            gatekeeper='http://localhost:3000'
                            redirect='http://localhost:3000'
                            appId='5bf8b72e4ad269e649c5'
                            onLoginSuccess={loginSuccess}
                            onLoginFailure={loginFailure}
                        >
                            <FaGithub size="25px" style={{ marginRight: '5px', color: '#211f1f' }} />
                            Login with Github
                     </CustomSocialButton>
                    </div>
                    <div className="col-6">
                        <CustomSocialButton
                            provider='linkedin'
                            gatekeeper='http://localhost:3000'
                            redirect='http://localhost:3000'
                            appId='81e1gehw3c0i31'
                            onLoginSuccess={loginSuccess}
                            onLoginFailure={loginFailure}
                            //key='linkedin'
                        >
                            <FaLinkedin size="25px" style={{ marginRight: '5px', color: '#0e76a8' }} />
                            Login with LinkedIn
                    </CustomSocialButton>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default SocialLoginButton;
