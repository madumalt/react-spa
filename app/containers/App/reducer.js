/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import {fromJS} from 'immutable';


// The initial state of the App.
// App state only contains the sessionId which should not change once it is generated.
const initialState = fromJS({
  appSessionId: generateAppSessionId(),
});

const appReducer = (state = initialState) => {
  return state;
};

function generateAppSessionId() {
  return (
    randomFourCharCode() + randomFourCharCode() + "-" +
    randomFourCharCode() + "-" +
    randomFourCharCode() + "-" +
    randomFourCharCode() + "-" +
    randomFourCharCode() + randomFourCharCode() + randomFourCharCode()
  ).toUpperCase();
}

function randomFourCharCode() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

export default appReducer;
