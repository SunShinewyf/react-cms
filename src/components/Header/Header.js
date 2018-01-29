import React, { Component } from 'react';
import './Header.less'

export default class Header extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <header className="header-container">
                <p>this is the header container</p>
            </header>
        )
    }

}