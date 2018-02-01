import React, { Component } from 'react';
import { Layout, Dropdown, Menu, Icon, Row, Col, Avatar, Input } from 'antd';
import './Header.less'

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search

export default class publicHeader extends Component {
    constructor() {
        super();
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="login" ><Icon type="login" />&nbsp;&nbsp;&nbsp;登录</Menu.Item>
                <Menu.Item key="logout" ><Icon type="logout" />&nbsp;&nbsp;&nbsp;退出</Menu.Item>
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