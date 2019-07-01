/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,LOGIN_SUBMIT,GET_USERS,LOGIN_INPUT} from './constants';

export const initialState = {
  users:[],
  loginInput:{}
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    
    switch (action.type) {
      case GET_USERS:
       // console.log('LOGIN_SUBMIT: ', action.users);
        draft.users=action.users
        break;

        case LOGIN_INPUT:
        console.log('login change: ', action.inputObj);
        draft.loginInput=action.inputObj
        break;
    }
  });

export default loginReducer;
