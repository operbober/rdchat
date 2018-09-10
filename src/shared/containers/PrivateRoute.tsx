import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, RouteComponentProps, RouteProps} from 'react-router-dom'
import {State} from '../State';

interface PrivateRouteProps extends RouteProps {
    isAuthenticated?: boolean
    component: React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>
}

const PrivateRouteComponent: React.StatelessComponent<PrivateRouteProps> = ({component: Component, isAuthenticated, ...rest}) => {
    const render = (props: RouteProps) => isAuthenticated
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/', state: {from: props.location && props.location.pathname}}}/>;
    return <Route {...rest} render={render}/>
};

export const PrivateRoute = connect(({auth}: State) => ({
    isAuthenticated: !!auth.user
}))(PrivateRouteComponent);
