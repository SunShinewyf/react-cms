import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from 'pages/Home/Home'
import User from 'pages/User/User';
import Counter from 'pages/Counter/Counter';

const getRouter = () => (
    <Router>
        <Home/>
    </Router>
);

export default getRouter;