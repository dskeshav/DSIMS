var express=require('express');
var bodyParser=require('body-parser');
var path=require('path')
//var cookieParser=require('cookie-parser');
var logger=require('morgan');
var faculty=require('./routes/faculty');
var app=express();

//Database connection
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/DSIMS')
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile)


//set static folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use('', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;