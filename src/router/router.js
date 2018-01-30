import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Layout from 'pages/Layout/Layout';
import User from 'pages/User/User';
import Counter from 'pages/Counter/Counter';

const getRouter = () => (
    <Router>
        <Layout/>
    </Router>
);

export default getRouter;