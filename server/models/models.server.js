
var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += 'ds135207.mlab.com:35207/heroku_72rkr1tw'; // use yours
}

mongodb://<dbuser>:<dbpassword>@ds135207.mlab.com:35207/heroku_72rkr1tw

var mongoose = require("mongoose");
var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);


module.exports = db;


