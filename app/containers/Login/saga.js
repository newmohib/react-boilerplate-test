
import { take, call, put, select,takeLatest } from 'redux-saga/effects';
import { getUsers } from './actions';
import request from 'utils/request';
import {  LOGIN_SUBMIT } from './constants';
import { makeSelectLoginInput } from 'containers/Login/selectors';
import { setToStore } from '../../utils/localstorage';
import { setAuthorizationToken } from 'containers/App/actions';


// const apiInfo = [
//   {
//     id: 1,
//     title: "events 1 Hello "
//   },
//   {
//     id: 2,
//     title: "events 2 Hello "
//   }
// ]

//https://jsonplaceholder.typicode.com/posts
//'http://localhost:4000/campaign'

// let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//         userId:100001,
//         id:100,
//         title:"qui est esse",
//         body:" est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque nulla"
//   }),
// };

export function* callApi() {

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  const responseUsers = yield call(request, requestURL,options);
 // console.log(apiInfo);
  yield put(getUsers(responseUsers));
}

export function* logniSubmitApi() {
  const loginInputObj = yield select(makeSelectLoginInput());
  console.log("input data in saga",loginInputObj);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      loginInputObj
    ),
  };

 // const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  const requestURL = `http://localhost:4000/login`;
  const responseUsers = yield call(request, requestURL,options);
  console.log("after submit",responseUsers);
  let getToken=responseUsers.isAuthorization;
  //set to localstorage
  setToStore("isAuthorization" , getToken);
  yield put(setAuthorizationToken(getToken));
  yield put(getUsers(responseUsers));

}

export default function* loginSaga()  {
  //const options='go to post data'
  yield callApi();
  yield takeLatest(LOGIN_SUBMIT, logniSubmitApi);

};
