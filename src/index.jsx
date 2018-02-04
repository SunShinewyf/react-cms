import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from 'stores/store'

import Routers from 'router/router'

ReactDom.render(
    <Provider store={store}>
        {Routers()}
    </Provider>,
    document.getElementById('app')
);