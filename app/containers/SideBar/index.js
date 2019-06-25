/**
 *
 * SideBar
 *
 */

import React, { memo,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

//sidebar
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar_content';
import {sidebarOpenToAction} from './actions';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSideBar,{makeSelectSidebarOpen} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SideBar(props) {
  console.log('props',props);
  const mql = window.matchMedia(`(min-width: 800px)`);
  useInjectReducer({ key: 'sideBar', reducer });
  useInjectSaga({ key: 'sideBar', saga });

  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    mql.addListener(mediaQueryChanged);
  }, []);

  useEffect(() => {
    mql.removeListener(mediaQueryChanged);
  }, []);

 const onSetSidebarOpen=(open)=> {
  setSidebarOpen(open);
  props.sidebarOpenAction(open);
  }

 const mediaQueryChanged=()=> {
  setSidebarOpen(false);
  props.sidebarOpenAction(false);
  setSidebarDocked( mql.matches)
  }

  return (
    <div>
      <Sidebar
          sidebar={<SidebarContent onSetSidebarOpen={onSetSidebarOpen} />}
          open={props.sidebarOpenFromRedux}
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { background: 'white' } }}
        >
          <button></button>
          {/* <button
            style={{position:'absolute',top:'60px' }}
            className="btn btn-primary btn-md mt-2 rounded-pill"
            onClick={() => onSetSidebarOpen(true)}
          >
            sidebar
          </button> */}
        </Sidebar>
    </div>
  );
}

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
//makeSelectSidebarOpen
const mapStateToProps = createStructuredSelector({
  sideBar: makeSelectSideBar(),
  sidebarOpenFromRedux: makeSelectSidebarOpen(),
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
)(SideBar);
