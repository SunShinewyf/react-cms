import React, { Component } from 'react';
import { Layout } from 'antd';;

import './Footer.less';
// import './antd.css'
const { Footer } = Layout;

export default class PublicFooter extends Component {
    constructor(){
        super();
    }

    
    render() {
        return (
            <Footer className="footer-container">
                <p>this is the footer container</p>
            </Footer>
        )
    }
}