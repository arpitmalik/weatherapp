const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.get("/", function(req, res) {
    res.send("test");
})

app.listen(port, () => {
    console.log("Listen on ", port);
})