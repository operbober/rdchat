import {Observable} from 'rxjs';

export interface AuthApi {
    signIn(): Observable<any>
    signOut(): Observable<void>
    subscribeOnAuthStateChanged(): Observable<any>
}
