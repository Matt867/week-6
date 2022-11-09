const express = require("express");
const path = require("path");

const app = express();

// Serve static resources from the `assets` folder.
app.use('/css', express.static(path.join(__dirname, '/assets/css')))
app.use('/js', express.static(path.join(__dirname, '/assets/js')))
// Add a GET handler that always responds successfully with the current time
// in a web page, using the following template:

app.get('/time', (req, res) => {
    let date = new Date()
    var datetime = date.toLocaleTimeString()
    const text = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Time</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/script.js" defer></script>
      </head>
      <body>
        <time datetime="DATETIME">${datetime}</time>
      </body>
    </html>
    `

    res.send(text)
})



/**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Time</title>
    <link rel="stylesheet" href="/css/style.css" />
    <script src="/js/script.js" defer></script>
  </head>
  <body>
    <time datetime="DATETIME">HH:MM:SS</time>
  </body>
</html>
*/

// Where:
//
// DATATIME is a valid global date and time string
// HH is current hour
// MM is current minutes
// SS is current seconds
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

module.exports = app;
