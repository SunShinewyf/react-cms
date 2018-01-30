import React, { Component } from 'react';
import Header from 'components/Header/Header'
import PublicFooter from 'components/Footer/Footer'
import './Home.less'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                this is Home page
                <PublicFooter/>
            </div>
        )
    }
}