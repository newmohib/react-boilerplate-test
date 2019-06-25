/**
 *
 * Form
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

 function Form({ ...rest }) {
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{lable}</label> */}
      <input
        {...rest}
      // value={value}
      // name={name}
      // id={name}
      // className="form-control"
      />
      {/* {errors && <div className="alert alert-danger">{errors}</div>} */}
    </div>
  );
}

Form.propTypes = {};

export default memo(Form);
