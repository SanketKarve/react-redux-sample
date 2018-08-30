/**
 * All states, action and action creator realted to authentication
 */

import {
  login as userLogin
} from '../api';
import { loadState, saveState } from '../utils/storage';
import {
  LOGIN,
  LOGOUT,
  SIGNUP } from './actionType';

// default state
const defaultState = {
  token: loadState(),
}

// Reducers
export default function reducer(state=defaultState, action={}) {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return { ...state, token: action.token, message: action.message };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}

// Action creators
export function verifyUserAndLogin(email, password) {
  // use thunk to call the api
  // when we have the data call the reducer to set the access token
  // userLogin(email, password);
  return (dispatch) => {
    userLogin(email, password)
    .then((response) => {
      const data = response.data;
      if(response.status) {
        // success
        saveState(data.id_token);
        dispatch(login({token: data.id_token}));
      } else {
        //failed
        dispatch(login({message: data.message}));
      }
    })
  }
}

export function signup(email, password, confirmation) {
  // call the api,
  // then dispatch some action to update the state
}

export function logout() {
  return (dispatch) => {
    // remove the token from storage
    saveState('');
    dispatch({type: LOGOUT});
  }
}

// private action creators
function login({token, message}) {
  return {
    type: LOGIN,
    token,
    message
  }
}
