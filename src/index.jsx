import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from 'stores/store'

import getRouter from 'router/router'

ReactDom.render(
    <Provider store={store}>
        {getRouter()}
    </Provider>,
    document.getElementById('app')
);