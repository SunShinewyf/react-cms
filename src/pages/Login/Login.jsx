import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { loginAction } from 'actions/user'
import './Login.less';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false
        }

        message.config({
            top: 100
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            login: true,
        })

        const data = this.props.form.getFieldsValue();
        this.props.login(data.name, data.password).callback.then(res => {
            if (!res.error && res.data) {
                this.setState({
                    login: true
                });
                message.success('hi   ' + res.data.name + ',欢迎来到react-cms管理系统');
                this.props.history.replace('/');
            }
        }).catch(err => {
            message.error('用户名或密码错误,请重试~');
            this.setState({
                login: false
            });
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="login-form" type="flex" justify="center" align="middle">
                <Col span="6">
                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)} className="register-form">
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: '请输入用户名',
                                }]
                            })(
                                <Input prefix={<Icon type="user"></Icon>} placeholder="用户名" />
                                )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '请输入密码'
                                }]
                            })(
                                <Input prefix={<Icon type="lock"></Icon>} placeholder="密码" />
                                )}
                        </Form.Item>
                        <Button className="login-btn" type='primary' htmlType='submit'>登录</Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

Login = Form.create()(Login);
const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user: user.user ? user.user : null,
        login: user.login,
        loginError: user.user ? null : user.loginError
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(loginAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);