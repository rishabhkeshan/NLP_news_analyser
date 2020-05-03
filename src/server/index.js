var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const bodyParser=require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.application_id,
    application_key: process.env.application_KEY
});
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)
app.use(express.static("dist"));
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.post('/urlNLP', function (req, res) {
  try {
      var data = textapi.sentiment({'text': req.body.url}, function (err, response) {
          if (err === null) {
              res.send(response);
          }
          else{
              console.log(err);
          }
      });
  } catch (error) {
    console.log(error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
