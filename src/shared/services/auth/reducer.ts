import * as firebase from 'firebase/app'
import {AnyAction, Reducer} from 'redux';
import {AUTH_STATE_CHANGE} from './actions';

export interface AuthState {
    user: firebase.User | null
}

const defaultState: AuthState = {
    user: null
};


export const authReducer: Reducer = (state: AuthState = defaultState, action: AnyAction): AuthState => {
    if (action.type === AUTH_STATE_CHANGE) {
        return action.user
            ? {
                ...state,
                user: action.user
            }
            : {
                ...state,
                ...defaultState
            };
    }
    return state;
};
