const express = require('express');
const path = require('path');

const app = express();

const publicFolder = path.join(__dirname, 'public');

// Serve static web pages from the `public` folder, and resources from the
// `assets` folder.
app.use("/", express.static(path.join(__dirname, "/public")))
app.use("/js", express.static(path.join(__dirname, "/assets/js")))
app.use("/css", express.static(path.join(__dirname, "/assets/css")))

module.exports = app;
