import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/app';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import ReduxPromise from 'redux-promise';

const fs = require('fs');
const path = require('path');
let indexFile = null;

indexFile = fs.readFileSync(path.join(__dirname, '../' ,'../', 'index.html'), 'utf8');

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

module.exports = function renderString(req, res){
    let a = ReactDOMServer.renderToString(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App/>
        </Provider>
    );
    indexFile = indexFile.replace('<!-- Content -->', a); 
    res.send(indexFile);
}