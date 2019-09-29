/**
 *
 * Dashboard
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
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PayPalButton from '../PayPal';

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  const sslinitial=()=> {
    var loader = function () {
      var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
      script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
      tag.parentNode.insertBefore(script, tag);
    }

    window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
  }
  sslinitial();
  let paymentData = [{
    store_id: 'brain5d8d26a896766',
    store_passwd: 'brain5d8d26a896766@ssl',
    total_amount: 100,
    currency: 'BD',
    tran_id: 'REF1231354',
    success_url: 'http://localhost.8080',
    fail_url: 'http://localhost.8080',
    cancel_url: 'http://localhost.8080',
    shipping_method: 'Courier',
    num_of_item:2,
    product_name: 'Computer.',
    product_category: 'Electronic',
    emi_option:1,
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'cust@yahoo.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    multi_card_name: 'mastercard',
    value_a: 'ref001_A',
    value_b: 'ref002_B',
    value_c: 'ref003_C',
    value_d: 'ref004_D'
  }]
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <div
        className="container form-wrapper"
        style={{ height: 'calc(100vh - 65px)' }}
      >
        <div className="row justify-content-center h-100">
          <div className="col-10 col-lg-6 col-md-8 col-sm-10 h-100 d-flex align-items-center">
            <div className="form-container formStyle">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h3 className="text-center headerStyle"><FormattedMessage {...messages.header} /></h3>
                    <div className="text-center">
                      <PayPalButton />
                      <button className="your-button-class" id="sslczPayBtn"
                        token=""
                        postdata={paymentData}
                        order="ABCD1234"
                        endpoint="https://sandbox.sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php?tran_id=59C2A4F6432F8&store_id=brain5d8d26a896766&store_passwd=brain5d8d26a896766@ssl&format=json"> Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
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
)(Dashboard);
