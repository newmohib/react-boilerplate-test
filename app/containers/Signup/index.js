/**
 *
 * Signup
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
import makeSelectSignup,{makeSelectSignupInput} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { SignupForm } from './signupForm';
import {signupSubmit, onChangeSignupInput } from './actions';

export function Signup(props) {
  useInjectReducer({ key: 'signup', reducer });
  useInjectSaga({ key: 'signup', saga });

  const validateProperty = (input) => {
    const { name, value } = input;
    // const obj = { [name]: value };
    let errors = null;
    if (value == '') {
      errors = "Required";
    }
    return errors;
  }

  const handleChange = (event) => {
    //console.log("namew", event.target.value, event.target.name);
    let { name, value } = event.target;
    const errors = {};
    // const errors = { ...this.state.errors };

      const signupInputObj = { ...props.signupInputSelectors };
      

    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = "Required";
    } else {
      delete errors[name];
    };

     signupInputObj[name] = value;
     console.log('index after update',signupInputObj);
     props.onChangeSignup(signupInputObj);
  
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formObject = {};
    for (let entry of formData.entries()) {
      let name = [entry[0]]
      let value = entry[1]
      formObject[name] = value;
    }
   // console.log(formObject);

   // const loginInputObj = { ...props.loginInput };

    props.signupSubmitToAction();

   // console.log(loginInputObj);
  }

  return (
    <div>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Description of Signup" />
      </Helmet>
      <div className="container form-wrapper" style={{ height: "calc(100vh - 65px)" }}>
        <div className="row justify-content-center h-100" >
          <div className="col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">
              <h3 className="text-center headerStyle">Login</h3>
              <div className="container">
                <hr />
                <SignupForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                ></SignupForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
  signupInputSelectors :makeSelectSignupInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeSignup: value => dispatch(onChangeSignupInput(value)),
    signupSubmitToAction: () => dispatch(signupSubmit()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Signup);
