import { fromJS } from 'immutable';

import {
  UPDATE_PROFILE_INFO,
  UPDATE_PROFILE_INFO_SUCCEEDED,
} from '../ProfilePage/constants';

const initialState = fromJS({
  updatedProfile: {},
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_INFO_SUCCEEDED:
      console.log(action.updatedProfile);
      return state.set('updatedProfile', action.updatedProfile)
    default:
      return state;
  }
}

export default homePageReducer;
