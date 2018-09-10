import {User} from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import {from, Observable, Observer} from 'rxjs';
import {AuthApi} from './AuthApi';

export class FirebaseApi implements AuthApi{

    private readonly options = {
        apiKey: process.env.REACT_APP_FIREBSE_API_KEY,
        authDomain: 'ivanstestproject.firebaseapp.com',
        databaseURL: 'https://ivanstestproject.firebaseio.com',
        messagingSenderId: '167879220438',
        projectId: 'ivanstestproject',
        storageBucket: 'ivanstestproject.appspot.com',
    };

    private firebaseApp: firebase.app.App;

    constructor() {
        this.firebaseApp = firebase.initializeApp(this.options);
    }

    public signIn(): Observable<firebase.auth.UserCredential> {
        return this.signInWithGoogle()
    }

    public signInWithGoogle(): Observable<firebase.auth.UserCredential> {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        return from(this.firebaseApp.auth().signInWithPopup(provider));
    }

    public signOut(): Observable<void> {
        return from(this.firebaseApp.auth().signOut());
    }

    public subscribeOnAuthStateChanged(): Observable<User | null> {
        return Observable.create( (observer: Observer<User | any>) => {
            this.firebaseApp.auth().onAuthStateChanged((user) => {
               observer.next(user)
            });
        })

/*        const onAuthStateChangeAsObservable =  bindCallback(this.firebaseApp.auth().onAuthStateChanged);
        return onAuthStateChangeAsObservable();*/
    }

}
