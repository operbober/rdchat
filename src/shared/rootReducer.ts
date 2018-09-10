import {combineReducers} from 'redux';
import {authReducer} from './services/auth/reducer';

export const rootReducer = combineReducers({
    auth: authReducer
});
