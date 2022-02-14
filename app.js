/* 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
*/

'use strict';

const express = require('express');
const path = require('path');
const cors = require("cors");

var app = express();

var posts = require("./routes/posts");

app.use(cors());

/*
app.get('/',function(req,res){
    res.send("Hello World!");
})
*/

app.use(express.static(path.join(__dirname,'/dist/front-end')));

app.use('/api/posts',posts);

app.use('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/dist/front-end/index.html'));
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
/*
app.listen(8080,function(){
    console.log("backend listening: localhost:8080");
})
*/

module.exports = app;