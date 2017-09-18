var express = require('express')
var bodyParser = require('body-parser')
var controller = require("./controller.js")
var cors = require("cors")


var app = express();

app.use(cors());

app.use(bodyParser.json());


var messagesBaseUrl = "http://localhost:3000/api/";


app.get( "/api/sun", controller.read )




app.listen(3000, function() {
    console.log("Hey girl, I'm listening on 3000!")
})