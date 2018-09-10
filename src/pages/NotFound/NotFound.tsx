import * as React from 'react';
import logo from './logo.png'
import './NotFound.css'

export class NotFound extends React.Component {
    public render() {
        return (
            <div className="NotFound">
                <strong style={{fontSize: '50pt'}}>404</strong>
                <img src={logo} alt=""/>
                <strong style={{fontSize: '50pt'}}>Page Not Found</strong>
            </div>
        );
    }
}
