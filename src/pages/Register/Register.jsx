import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import './Register.less';

export default class Register extends Component {
    constructor() {
        super();
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    toLogin() {

    }

    render() {
        return (
            <Row className="register-form" type="flex" justify="center" align="middle">
                <Col span="6">
                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="register-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user"></Icon>} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock"></Icon>} placeholder="密码" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock"></Icon>} placeholder="确认密码" />
                        </Form.Item>
                        <Button className="btn-register" type='primary' htmlType='submit'>注册</Button>
                        <Button className="btn-login" htmlType='button' onClick={this.toLogin.bind(this)}>去登录</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}