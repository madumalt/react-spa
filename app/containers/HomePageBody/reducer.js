/*
 * HomePageBody Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_RESOURCE_NAME,
  SET_BACK_END_API_RESPONSE,
  SET_USERINFO_RESPONSE,
} from './constants';


// The initial state of the HomePageBody.
const initialState = fromJS({
  resourceName: '',
  backEndAPIResponse: {
  },
  userInfoResponse: {
  },
});

const homePageBodyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_RESOURCE_NAME:
      return state.set('resourceName', action.resourceName);
    case SET_BACK_END_API_RESPONSE:
      return state.set('backEndAPIResponse', action.response);
    case SET_USERINFO_RESPONSE:
      return state.set('userInfoResponse', action.response);
    default:
      return state;
  }
};

export default homePageBodyReducer;
