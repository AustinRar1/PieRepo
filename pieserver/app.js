var express = require('express'); 
var app = express();
var test = require('C:/Users/ajrar/Documents/JavaScriptMay2018/GroupChallenege/pieserver/controllers/testcontroller.js');
var sequelize = require('C:/Users/ajrar/Documents/JavaScriptMay2018/GroupChallenege/pieserver/dp.js');
var bodyParser = require('body-parser');
var router = require('express').Router();
sequelize.sync();
app.use(bodyParser.json());
app.listen(3000, function(){
    console.log('App is listening on 3000.')
});
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
   });
app.use('/',test)