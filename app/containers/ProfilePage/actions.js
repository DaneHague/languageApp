import {
  GET_PROFILE_INFO,
  GET_PROFILE_INFO_SUCCEEDED,
  GET_PROFILE_INFO_FAILED,
  UPDATE_PROFILE_INFO,
  UPDATE_PROFILE_INFO_SUCCEEDED,
  UPDATE_PROFILE_INFO_FAILED
} from './constants';

export function getProfileInfo() {
  return {
    type: GET_PROFILE_INFO
  };
}

export function getProfileInfoSucceded(user) {
  return {
    type: GET_PROFILE_INFO_SUCCEEDED,
    user
  };
}

export function getProfileInfoFailed(message) {
  return {
    type: GET_PROFILE_INFO,
    message
  };
}

export function updateProfileInfo(user) {
  return {
    type: UPDATE_PROFILE_INFO,
    user,
  };
}

export function updateProfileInfoSucceeded(updatedProfile) {
  return {
    type: UPDATE_PROFILE_INFO_SUCCEEDED,
    updatedProfile,
  };
}

export function updateProfileInfoFailed(message) {
  return {
    type: UPDATE_PROFILE_INFO_FAILED,
    message,
  };
}