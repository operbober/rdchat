import {connectRouter, routerMiddleware} from 'connected-react-router';
import {History} from 'history';
import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';
import {FirebaseApi} from './api/FirebaseApi';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import {subscribeOnAuthStateChange} from './services/auth/actions';


export const configureStore = (history: History): Store => {

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            firebaseApi: new FirebaseApi()
        }
    });

    const enhancer = applyMiddleware(routerMiddleware(history), epicMiddleware);

    const store = createStore(
        connectRouter(history)(rootReducer),
        process.env.REACT_APP_DEV
            ? composeWithDevTools(enhancer)
            : enhancer
    );

    epicMiddleware.run(rootEpic);

    store.dispatch(subscribeOnAuthStateChange());
    return store;
};
