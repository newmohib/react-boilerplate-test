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
import makeSelectSignup, { makeSelectSignupInput } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { SignupForm } from './signupForm';
import { signupSubmit, onChangeSignupInput } from './actions';

export function Signup(props) {
  useInjectReducer({ key: 'signup', reducer });
  useInjectSaga({ key: 'signup', saga });

  //let { birthDate } = props.signupInputSelectors.birthDate;
 // console.log(props.signupInputSelectors.birthDate);

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
    const signupInputObj = { ...props.signupInputSelectors };

    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = "Required";
    } else {
      delete errors[name];
    };

    signupInputObj[name] = value;
    console.log('index after update', signupInputObj);
    props.onChangeSignup(signupInputObj);

  };

  const handleChangeDate = ({ currentTarget }) => {
    const { name, value } = currentTarget
    //console.log(name, new Date(value));
    const errors = {};
    const signupInputObj = { ...props.signupInputSelectors };

    const errorMessage = validateProperty(event.target);
    if (errorMessage) {
      errors[name] = "Required";
    } else {
      delete errors[name];
    };
   // console.log(value.split('.'));
    //console.log( typeof JSON.stringify(value) );
    //console.log(value.toLocaleString());
    // signupInputObj[name] = new Date(value);
   var  testvalue=value;

    // if (typeof value=="object") {
      
    //    testvalue= JSON.stringify(value).split('.')[0].split('"')[1];
    // }

    signupInputObj[name] = new Date(testvalue);
    props.onChangeSignup(signupInputObj);
   // console.log(props.signupInputSelectors);
    
    console.log(typeof testvalue);
    
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
      <div className="container mt-5 form-wrapper" >
        <div className="row justify-content-center h-100" >
          <div className="col-10 col-lg-10 col-md-10 col-sm-12 ">
            <div className="form-container formStyle">
              <h3 className="text-center headerStyle">Login</h3>
              <div className="container">
                <hr />
                <SignupForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleChangeDate={handleChangeDate}
                  birthDateValue  ={props.signupInputSelectors.birthDate}
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
  signupInputSelectors: makeSelectSignupInput(),
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
