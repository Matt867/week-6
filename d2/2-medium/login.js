const express = require("express");

const app = express();

// Form data is URL encoded
app.use(express.urlencoded({ extended: false }));

// Add a POST handler on the "/login" route that expects a body with both a
// `username` and `password` field.
//
// - If either the `username` or `password` is missing from the request body,
//   send a Bad Request status in response.
//
// - If `username` is `alice` and password is `s3cr3t`, send a redirect to "/"
//   in response.
//
// - Otherwise, send an Unauthorized status in reponse.

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username | !password) {
        res.sendStatus(400);
    } else {
        if (username === 'alice' && password === 's3cr3t') {
            res.redirect('/');
        } else{
            res.sendStatus(401)
        }
    }
})

module.exports = app;
