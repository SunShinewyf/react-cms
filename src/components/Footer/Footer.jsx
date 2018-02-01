import React, { Component } from 'react';
import { Layout } from 'antd';;

import './Footer.less';
const { Footer } = Layout;

export default class PublicFooter extends Component {
    constructor(){
        super();
    }

    
    render() {
        return (
            <Footer className="footer-container">
                <div className="footer-text">react-cms © SunShinewyf </div>
            </Footer>
        )
    }
}