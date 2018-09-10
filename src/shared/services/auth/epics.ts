import * as firebase from 'firebase/app'
import {Action, AnyAction} from 'redux';
import {combineEpics, Epic, ofType} from 'redux-observable';
import {ignoreElements, map, switchMap} from 'rxjs/operators';
import {AuthApi} from '../../api/AuthApi';
import {authStateChange, SIGN_IN, SIGN_OUT, SUBSCRIBE_ON_AUTH_STATE_CHANGE} from './actions';

const authStateChangeEpic: Epic<Action, AnyAction, void, { firebaseApi: AuthApi }> = (action$, state$, {firebaseApi}) => action$.pipe(
    ofType(SUBSCRIBE_ON_AUTH_STATE_CHANGE),
    switchMap(() => firebaseApi.subscribeOnAuthStateChanged().pipe(
        map((user: firebase.User | null) => authStateChange(user))
    ))
);

const signInEpic: Epic<Action, Action, void, { firebaseApi: AuthApi }> = (action$, state$, {firebaseApi}) => action$.pipe(
    ofType(SIGN_IN),
    switchMap(() => firebaseApi.signIn().pipe(
        ignoreElements()
    ))
);


const signOutEpic: Epic<Action, Action, void, { firebaseApi: AuthApi }> = (action$, state$, {firebaseApi}) => action$.pipe(
    ofType(SIGN_OUT),
    switchMap(() => firebaseApi.signOut().pipe(
        ignoreElements()
    ))
);

export const authEpic = combineEpics(authStateChangeEpic, signInEpic, signOutEpic);
