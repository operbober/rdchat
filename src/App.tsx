import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {NotFound} from './pages/NotFound/NotFound';
import {PrivatePage} from './pages/PrivatePage/PrivatePage';
import {StartPage} from './pages/StartPage/StartPage';
import Template from './pages/Template';
import {PrivateRoute} from './shared/containers/PrivateRoute';
import {configureStore} from './shared/store';

const history = createBrowserHistory();
const store = configureStore(history);

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Template>
                        <Switch>
                            <Route path="/" exact={true}  component={StartPage}/>
                            <PrivateRoute path="/chat" component={PrivatePage}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </Template>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
