import React, { Component } from 'react';

import { Layout } from 'antd';

import Header from 'components/Header/Header'
import SideBar from 'components/SideBar/SideBar'
import PublicFooter from 'components/Footer/Footer'

const { Content } = Layout;
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout className="ant-layout-has-sider">
                <SideBar />
                <Layout>
                    <Header />
                </Layout>

            </Layout>
        )
    }
}

export default App;