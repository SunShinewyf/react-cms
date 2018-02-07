import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Header from 'components/Header/Header'
import SideBar from 'components/SideBar/SideBar'
import Footer from 'components/Footer/Footer'
import { userActions } from 'actions/user'

import './Home.less'

const { Content } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const logout = this.props.logout;
        return (
            <Layout className="ant-layout-has-sider">
                <SideBar />
                <Layout>
                    <Header logout={logout}/>
                    <Content className="content-container">

                    </Content>
                    <Footer />
                </Layout>

            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user: user ? user : null
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(userActions.logout, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);