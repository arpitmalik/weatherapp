// require("babel-polyfill");
const express = require('express');
const port = process.env.PORT || 5000;
const renderString = require('./renderString.js');
const app = express();
const webpack = require('webpack');
let config = require('../../webpack.config')
const path = require('path');

const compiler = webpack(config);
let devMiddleware = require('webpack-dev-middleware')

app.use(devMiddleware(compiler));

app.use('/style/style.css', function(req, res){
    res.sendFile(path.join(__dirname, '../../style/style.css'));
})


app.get("/", renderString);

app.listen(port, () => {
    console.log("Listen on ", port);
})