import * as firebase from 'firebase/app'
import {Action, AnyAction} from 'redux';

export const SUBSCRIBE_ON_AUTH_STATE_CHANGE = 'SUBSCRIBE_ON_AUTH_STATE_CHANGE';
export const AUTH_STATE_CHANGE = 'AUTH_STATE_CHANGE';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const subscribeOnAuthStateChange = (): Action => ({
    type: SUBSCRIBE_ON_AUTH_STATE_CHANGE
});

export const authStateChange = (user: firebase.User | null): AnyAction => ({
    type: AUTH_STATE_CHANGE,
    user
});

export const signIn = (): Action => ({
    type: SIGN_IN
});

export const signOut = (): Action => ({
    type: SIGN_OUT
});


