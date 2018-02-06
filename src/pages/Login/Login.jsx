import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message, Icon } from 'antd';
import {connect } from 'react-redux'
import './Login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    toLogin() {

    }

    render() {
        return (
            <Row className="login-form" type="flex" justify="center" align="middle">
                <Col span="6">
                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="register-form">
                        <Form.Item>
                            <Input prefix={<Icon type="user"></Icon>} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type="lock"></Icon>} placeholder="密码" />
                        </Form.Item>
                        <Button className="login-btn" type='primary' htmlType='submit'>登录</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);