const express = require("express");
const app = express();
var indexRouter = require('./route/serverRoute');

app.use('/', indexRouter);

// handle invalid url
app.get('*', (req, res) => {
    res.send("Wrong URL...");
})
app.listen(3000, '127.0.0.1', () => {
    console.log('running at 3000....')
});

module.exports = app;