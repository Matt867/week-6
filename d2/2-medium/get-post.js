const express = require("express");

const app = express();

// Form data is URL encoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let data = {};

// Add a GET handler on the "/data" route that responds with the current `data`
// in an `application/json` response body.
app.get('/data', (req, res) => {
    res.send(data)
})


// Add a POST handler on the "/data" route that updates the current `data` from
// the request body.
app.post('/data', (req, res) => {
    if (Object.entries(req.body).length > 0) {
        data = req.body
        res.redirect('/data')
    } else {
        res.sendStatus(400)
    }
})

module.exports = app;
