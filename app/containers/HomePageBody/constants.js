/*
 * HomePageBody Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Action Constants.
export const CHANGE_RESOURCE_NAME='changeResourceName';
export const INVOKE_BACK_END_API='invokeBackEndAPI';
export const INVOKE_USERINFO_API='invokeUserInfoAPI';
export const SET_BACK_END_API_RESPONSE='setBackEndAPIResponse';
export const SET_USERINFO_RESPONSE='setUserInfoResponse';

// Other Constants.
export const HOME_PAGE_BODY = 'homePageBody';
