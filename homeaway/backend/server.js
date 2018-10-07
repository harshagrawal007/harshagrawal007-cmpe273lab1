const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pool = require("./pool");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const mysql = require("mysql");
const fs = require("fs");
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    console.log(newFilename);
    cb(null, newFilename);
  }
});

const upload = multer({ storage });

app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

app.use(bodyParser.json());

//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


app.post("/", upload.single("Propertyimages"), (req, res) => {
  console.log("Request ---", req.body);
  console.log("Request file ---", req.file);//Here you get file.
  if (!req.file) {
    console.log("No file received");
    res.send({
      success: false
    });
  } else {
    console.log("File received!", req.file);
   
    res.send();
  }
});

app.post("/TravelLogin", function(req, res){
  console.log("Inside Traveller login POST request");
  let username = req.body.email;
  let password = req.body.password;
  console.log(username+" "+password);
  let sql =
    "SELECT * FROM traveller WHERE EMAIL = " +
    mysql.escape(username) +
    "AND PASSWORD = " +
    mysql.escape(password);
  pool.getConnection((err, con) => {
    if (err) {
      console.log("Could not connect to database!");
      res.writeHead(400, {
        "Content-Type": "text/plain"
      });
      res.end("Could not get connection object!");
    } else {
      console.log("Connection to database successful");
      con.query(sql, (err, result) => {
        if (err) {
          console.log("Invalid credentials");
          res.writeHead(400, {
            "Content-Type": "text/plain"
          });
          res.end("Invalid Credentials");
        } else {
          console.log("Login successful");
          res.cookie("travellercookie", req.body.email, {maxAge: 900000, httpOnly: false, path: "/"});
          req.session.email = req.body.email;
          res.writeHead(200, {
            "Content-Type": "text/plain"
          });
          res.end("Login successful");
        }
      });
    }
  });
});

app.post("/OwnerLogin", function(req, res){
  console.log("Inside Owner login POST request");
  let username = req.body.email;
  let password = req.body.password;
  console.log(username+" "+password);
  let sql =
    "SELECT * FROM owner WHERE EMAIL = " +
    mysql.escape(username) +
    "AND PASSWORD = " +
    mysql.escape(password);
  pool.getConnection((err, con) => {
    if (err) {
      console.log("Could not connect to database!");
      res.writeHead(400, {
        "Content-Type": "text/plain"
      });
      res.end("Could not get connection object!");
    } else {
      console.log("Connection to database successful");
      con.query(sql, (err, result) => {
        if (err) {
          console.log("Invalid credentials");
          res.writeHead(400, {
            "Content-Type": "text/plain"
          });
          res.end("Invalid Credentials");
        } else {
          console.log("Login successful");
          res.cookie("ownercookie", req.body.email, {maxAge: 900000, httpOnly: false, path: "/"});
          req.session.email = req.body.email;
          res.writeHead(200, {
            "Content-Type": "text/plain"
          });
          res.end("Login successful");
        }
      });
    }
  });
});

app.post('/TravellerSignup', function(req,res){
  console.log("Inside Traveller Signup Request");
  console.log(req.body);
  var query = "INSERT INTO `traveller`(`LAST_NAME`, `FIRST_NAME`, `Email`, `PASSWORD`)VALUES('"+req.body.firstname+"','"+req.body.lastname+"','"+(req.body.password)+"','"+req.body.email+"')";
  console.log(query);
  pool.getConnection(function(err, conn) {
    if (!err) {
      console.log('You are now connected...')
      conn.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      })
      conn.release()
    }
  })
})


/*app.get("/home", function(req, res) {
  var sql = "SELECT * FROM property";
  pool.getConnection(function(err, con) {
    if (err) {
      res.writeHead(400, {
        "Content-Type": "text/plain"
      });
      res.end("Could Not Get Connection Object");
    } else {
      con.query(sql, function(err, result) {
        if (err) {
          res.writeHead(400, {
            "Content-Type": "text/plain"
          });
          res.end("Could Not Get Connection Object");
        } else {
          res.writeHead(200, {
            "Content-Type": "application/json"
          });
          res.end(JSON.stringify(result));
        }
      });
    }
  });
});

*/
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");
