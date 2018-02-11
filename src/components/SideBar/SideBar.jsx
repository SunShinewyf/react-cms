import React, { Component } from 'react';

import { Layout, Menu, Icon, Button } from 'antd';
import './SideBar.less'

// const { Side } = L;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SideBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Layout.Sider className="side-panel">
                <div className="side-logo" />
                {/* <Button icon="menu-fold" type="primary" className="menu-button"/> */}
                <Menu mode="inline" theme="dark" className="side-menu">
                    <Menu.Item key="user">
                        <Icon type="user" />用户列表
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="table" />数据列表</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">设置</a>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }
};