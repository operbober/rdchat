import {Location} from 'history';
import {AuthState} from './services/auth/reducer';


export interface State {
    auth: AuthState,
    location: Location
}
