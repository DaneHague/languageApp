import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { getProfileInfoSucceded, getProfileInfoFailed, updateProfileInfoSucceeded, updateProfileInfoFailed } from './actions';

import {
  GET_PROFILE_INFO,
  UPDATE_PROFILE_INFO,
} from './constants';

export function fetchUserFromServer() {
  return fetch('http://localhost:58411/api/users/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
    },
  }).then(response => response.json());
};

export function* fetchUser() {
  try {
    const user = yield call(fetchUserFromServer);
    yield put(getProfileInfoSucceded(user));
  } catch (e) {
    yield put(getProfileInfoFailed(e.message));
  }
};

export function fetchProfileFromServer(data) {
  var user = data.user.User
  return fetch('http://localhost:58411/api/users/profile/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
    },
    body: 
      JSON.stringify(user)
  }).then(response => response.json());
}

export function* updateUser(data) {
  try {
    const user = yield call(fetchProfileFromServer, data);
    yield put(updateProfileInfoSucceeded(user));
  } catch (e) {
    console.log(e.message);
    yield put(updateProfileInfoFailed(e.message));
  };
};

// Individual exports for testing
export default function* profilePage() {
  yield [
    takeLatest(UPDATE_PROFILE_INFO, updateUser),
    takeLatest(GET_PROFILE_INFO, fetchUser),
  ]
};
