'use strict'

var express = require('express');
var path = require('path');
var GridStore = require('mongodb').GridStore;
var ObjectID = require('mongodb').ObjectID;

var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var GitHubApi = require("github");

//var url = 'mongodb://localhost:27017/mongo_proyecto2';
var url = 'mongodb://web:123456Sha@ds141524.mlab.com:41524/shaserviciocotizaciones'


var github = new GitHubApi({});

// TODO: optional authentication here depending on desired endpoints. See below in README.


function postSer(callback, searchP) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        console.log("conectado a mongo");

        var coll = db.collection("historyParcial1");

        coll.insertMany([searchP], function (err, result) {

        });

        coll.find({}).toArray(function (err, pro) {
            if (err) throw err;

            console.log("hay " + pro.length + " searchs");

            callback(err, pro);
        });
        db.close();
    });

}


function getSer(callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        console.log("conectado a mongo");

        var coll = db.collection("historyParcial1");


        coll.find({}).toArray(function (err, pro) {
            if (err) throw err;

            console.log("hay " + pro.length + " searchs");

            callback(err, pro);
        });
        db.close();
    });

}


var app = express();
var router = express.Router();


//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies


//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


module.exports = router;

// public es la ruta en la url
//app.use("/public", express.static("./static"));

app.use(express.static(path.join(__dirname, 'front/build/')));
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/getfollowers/:nameFollower', function (req, res) {

    let name = req.params.nameFollower;

    github.users.getFollowingForUser({
        username: name
    }, function (err, dat) {
        res.json(dat.data);
    });
});

app.get('/reps/:name', function (req, res){
    
    let name = req.params.name;
    github.users.getFollowingForUser({
        username: name
    }, function (err, dat) {
        res.json(dat.data);
    });
    
});


app.get('/search', function (req, res) {
    
    getSer(function (err, searchs) {
        if (err) {
            res.json(["Error obteniendo search"]);
            return;
        }
        res.json(searchs);
    });
    
    });  

app.post('/search', function (req, res) {

    console.log(req);

    var busq = {};
    busq.date = Date();
    busq.search = req.body;

    postSer(function (err, searchs) {
        if (err) {
            res.json(["Error obteniendo search"]);
            return;
        }
        res.json(searchs);
    }, busq);

});





app.listen(8080, function () {
    console.log("Listening on 8080");
});