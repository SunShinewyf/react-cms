import React, { Component } from 'react';
import { Layout } from 'antd';;

import './Footer.less';
import 'antd/dist/antd.less';

const { Footer } = Layout;

export default class PublicFooter extends Component {
    render() {
        return (
            <Footer className="footer-container">
                <p>this is the footer container</p>
            </Footer>
        )
    }
}