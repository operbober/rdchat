import {combineEpics} from 'redux-observable';
import {authEpic} from './services/auth/epics';

export const rootEpic = combineEpics(
    authEpic
);
