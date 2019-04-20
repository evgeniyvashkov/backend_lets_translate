const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//routs
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const myCommentsRouter = require('./routes/myComments');
const newCommentsRouter = require('./routes/newComments');
const tariffs = require('./routes/tariffs');

const app = express();
const port = 3001;

app.set('port', port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//use routs
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/myComments', myCommentsRouter);
app.use('/newComments', newCommentsRouter);
app.use('/tariffs', tariffs);

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
  res.send(500);
});

app.listen(port, ()=> console.log('server started'))

module.exports = app;