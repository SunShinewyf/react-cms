import React, { Component } from 'react';
import { Layout, Dropdown, Menu, Icon, Row, Col, Avatar, Input } from 'antd';
import { withRouter } from "react-router-dom";
import './Header.less'

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search

class publicHeader extends Component {
    constructor() {
        super();
    }

    //此处应该使用箭头函数，否则绑定不了this
    handleLogout = (data) => {
        const { logout } = this.props;
        switch (data.key) {
            case 'logout':
                logout().callback.then(() => {
                    this.props.history.replace('/login');
                })
        }
    }

    render() {
        const menu = (
            <Menu onClick={this.handleLogout} >
                <Menu.Item key="logout"><Icon type="logout" />&nbsp;&nbsp;&nbsp;退出</Menu.Item>
                <Menu.Item key="setting"><Icon type="setting" />&nbsp;&nbsp;&nbsp;设置</Menu.Item>
            </Menu>
        )
        return (
            <Header className="header-container">
                <Row type="flex" justify="end">
                    <Col span={8} className="search-box">
                        <Search />
                    </Col>

                    <Col span={3} className="header-dropdown">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                <span> <Avatar style={{ verticalAlign: 'middle' }}></Avatar> &nbsp;&nbsp;<Icon type="down" /></span>
                            </a>
                        </Dropdown>
                    </Col>
                </Row>

            </Header>
        )
    }
}

export default withRouter(publicHeader);