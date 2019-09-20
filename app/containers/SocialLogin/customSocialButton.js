import React, { Component } from 'react';
import SocialLogin from 'react-social-login'
 
const Button = ({ children, triggerLogin, ...props }) => (
  <button className="customSocialButto" onClick={triggerLogin} {...props}>
    { children }
  </button>
)
 
export default SocialLogin(Button)