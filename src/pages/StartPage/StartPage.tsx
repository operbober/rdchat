import * as React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {State} from '../../shared/State';
import logo from './logo.png'
import './StartPage.css'

export class StartPageComponent extends React.Component {

    public props: {
        isAuthenticated: boolean
    };

    public render() {
        return this.props.isAuthenticated
            ? <Redirect to="/chat"/>
            : (
                <div className="StartPage">
                    <img src={logo} alt="Dog!!!"/>
                    <strong style={{fontSize: '50pt'}}>Sign In to continue!</strong>
                </div>
            )
    }
}

export const StartPage = connect(({auth}: State) => ({
    isAuthenticated: !!auth.user
}))(StartPageComponent);
