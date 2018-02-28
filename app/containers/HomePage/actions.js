import {
  UPDATE_PROFILE_INFO,
  UPDATE_PROFILE_INFO_SUCCEEDED,
} from '../ProfilePage/constants';

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