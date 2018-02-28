import { fromJS } from 'immutable';

import {GET_PROFILE_INFO_SUCCEEDED,
  UPDATE_PROFILE_INFO_SUCCEEDED,
  UPDATE_PROFILE_INFO_FAILED,
} from './constants';

const initialState = fromJS({
  user: {},
  updatedProfile: {},
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_INFO_SUCCEEDED:
      return state.set('user', action.user)
    case UPDATE_PROFILE_INFO_SUCCEEDED:
      console.log(action.updatedProfile);
      return state.set('updatedProfile', action.updatedProfile)
    case UPDATE_PROFILE_INFO_FAILED:
      return state.set('userUpdate', action.userUpdate)
    default:
      return state;
  }
}

export default profilePageReducer;
