/**
 *
 * Form
 *
 */

import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const Input = React.memo((props) => {
  let {name, type,autoFocus, ...rest}=props
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{lable}</label> */}
      <input
        {...rest}
        // value={value}
        autoFocus={autoFocus}
         name={name}
         type={type}
         id={name}
        className="form-control"
      />
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
    </div>
  );
})

Input.propTypes = {};


export const DateInput = React.memo((props,{...rest}) => {
  return (
      <div className="form-group">
          <div className="react-datepicker-wrapper">
              <DatePicker
                  {...rest}
                  // onChange={onChange}
                  // selected={value}
                  // name={name}
                  // id={name}
                  minDate={new Date()}
                  className="form-control"
                  // dateFormat="MMMM d, yyyy h:mm aa"
                  dateFormat="MMMM d, yyyy"
                  //placeholderText="MMMM d, yyyy"
              />
              {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
          </div>
      </div>
  );
});

DateInput.propTypes = {};



export const  Select = React.memo((props,{...rest}) =>  {
  
      let languageList = [{ id: '1', optionName: "DE" }, { id: '2', optionName: "BD" }];
      //let { name, errors, lable, options, defaultValue, ...rest } = props;

      return (
          <div className="form-group">
              {/* <label htmlFor={name}>{lable}</label> */}
              <select //name={name} id={name} {...rest} value={defaultValue}
                  className="form-control" >
                  <option value="" />
                  {languageList.map(item =>
                      <option
                          key={item.id}
                          value={item.optionName}
                      >{item.optionName}
                      </option>
                  )}
              </select>
              {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
          </div>
      );
});

