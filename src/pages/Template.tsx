import {Layout} from 'antd';
import * as React from 'react';
import {Header} from './Header';
import './Template.css'


class Template extends React.Component {
    public render() {
        return (
            <Layout className="Template">
                <Layout.Header>
                    <Header/>
                </Layout.Header>
                {this.props.children}
            </Layout>
        );
    }
}

export default Template;
