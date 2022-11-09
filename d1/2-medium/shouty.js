const express = require('express');

const app = express();

// Add a GET handler that always responds successfully with the route in
// uppercase, i.e., GET /hello should respond with the text body: HELLO!

app.get('/:path', async (req, res) => {
    const path = req.params.path
    res.send(path.toUpperCase()+"!")
})

module.exports = app;
