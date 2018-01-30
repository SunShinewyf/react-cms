import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col,Avatar, Input } from 'antd';
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
        return (
            <Header className="header-container">
                <Row type="flex" justify="end">
                    <Col span={8} className="search-box"> 
                       <Search/>
                    </Col>
                    
                    <Col span={3}>
                        <Menu mode="horizontal" theme="dark" className="header-menu">
                            <SubMenu title={<span> <Avatar style={{ verticalAlign: 'middle' }}></Avatar> &nbsp;&nbsp;<Icon type="down" /></span>}>
                                <Menu.Item key="login" ><Icon type="login" />登录</Menu.Item>
                                <Menu.Item key="logout" ><Icon type="logout" />退出</Menu.Item>
                                <Menu.Item key="setting"><Icon type="setting" />设置</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Col>
                </Row>

            </Header>
        )
    }

}