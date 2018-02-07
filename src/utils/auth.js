import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const auth = function (history) {
    const isLogIn = !!window.localStorage.getItem('uid');
    console.log(isLogIn, history.location.pathname)
    if (!isLogIn && history.location.pathname != '/Login') {
        history.replace('login');
    }
}

export default function authValidate(ArgComponent) {
    class authComponent extends Component {
        componentWillMount() {
            this.authCheck(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                this.authCheck(nextProps);
            }
        }

        authCheck(params) {
            const { history } = params;
            auth(history)
        }

        render() {
            return <ArgComponent {...this.props} />
        }
    }
    return withRouter(authComponent);
}