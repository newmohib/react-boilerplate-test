/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNavbar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { sidebarOpenToAction } from '../SideBar/actions';

export function Navbar(props) {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });

  return (
    // <div className="shadow-sm bg-white rounded">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <button
    //       className="btn btn-light btn-md"
    //       onClick={() => props.sidebarOpenAction(true)}
    //     >
    //       <FontAwesomeIcon icon={faAlignJustify} size="lg" />
    //     </button>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Features</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Pricing</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Dropdown link
    //     </a>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //             <a className="dropdown-item" href="#">Action</a>
    //             <a className="dropdown-item" href="#">Another action</a>
    //             <a className="dropdown-item" href="#">Something else here</a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>


    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="btn btn-light btn-md"
          onClick={() => props.sidebarOpenAction(true)}
        >
          <FontAwesomeIcon icon={faAlignJustify} size="lg" />
        </button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <NavLink to="/" class="nav-link">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <NavLink to="/login" className="btn btn-outline-success mr-sm-2" >Login</NavLink>
            <NavLink to="/logout" className="btn btn-outline-success my-2 my-sm-0" >Logout</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sidebarOpenAction: value => dispatch(sidebarOpenToAction(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Navbar);
