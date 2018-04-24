var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var cookieParser=require('cookie-parser');
var logger = require('morgan');
var student = require('./routes/student');
var course=require('./routes/student');

var app = express();

//Database connection
var mongoose = require('mongoose');
var uri = 'mongodb://keshav:sriram@ds043057.mlab.com:43057/dsims';

// var options = {
//   "server" : {
//     "socketOptions" : {
//       "keepAlive" : 300000,
//       "connectTimeoutMS" : 30000
//     }
//   },
//   "replset" : {
//     "socketOptions" : {
//       "keepAlive" : 300000,
//       "connectTimeoutMS" : 30000
//     }
//   }
// }

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/DSIMS')
//   .then(() => console.log('connection succesful'))
//   .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.use('/student', student);


//set static folder
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use('', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;