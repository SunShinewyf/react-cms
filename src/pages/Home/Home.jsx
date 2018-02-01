import React, { Component } from 'react';

import { Layout } from 'antd';


import Header from 'components/Header/Header'
import SideBar from 'components/SideBar/SideBar'
import Footer from 'components/Footer/Footer'
import './Home.less'

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
                    <Content className="content-container"/>
                    <Footer />
                </Layout>

            </Layout>
        )
    }
}

export default App;