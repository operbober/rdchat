import {Avatar, Button, Dropdown, Menu} from 'antd';
import * as firebase from 'firebase/app';
import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {signIn, signOut} from '../shared/services/auth/actions';
import {State} from '../shared/State';
import './Header.css'
import logo from './StartPage/logo.png'

interface HeaderPropTypes {
    user: firebase.User | null,
    signIn(): void,
    signOut(): void
}

class HeaderComponent extends React.Component {

    public props: HeaderPropTypes;

    public render() {
        return (
            <div className="Header">
                <Link className="Logo" to="/">
                    <Avatar shape="square" size={50} src={logo}/>
                    RDC
                </Link>
                <div>
                    {this.props.user
                        ? (
                            <Dropdown
                                overlay={(
                                    <Menu>
                                        <Menu.Item key="0"
                                                   disabled={true}>{this.props.user.displayName}</Menu.Item>
                                        <Menu.Divider/>
                                        <Menu.Item key="1">
                                            <Button htmlType="button" type="danger"
                                                    onClick={this.props.signOut}>Sign Out</Button>
                                        </Menu.Item>
                                    </Menu>
                                )}
                            >
                                <Avatar size={50} src={this.props.user.photoURL || undefined}/>
                            </Dropdown>
                        )
                        : <Button ghost={true} onClick={this.props.signIn} htmlType="button">Sign
                            In</Button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    ...state.auth
});

export const Header = connect(mapStateToProps, {signIn, signOut})(HeaderComponent);
