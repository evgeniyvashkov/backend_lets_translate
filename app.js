require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const {db, Sequelize} = require('./config/db')
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', routes.homeRouter);
app.use('/users', routes.usersRouter);
app.use('/tasks', routes.tasksRouter);
app.use('/myComments', routes.myCommentsRouter);
app.use('/newComments', routes.newCommentsRouter);
app.use('/tariffs', routes.tariffs);
app.use('/users', routes.users);
app.use('/taskComments', routes.taskComment);
app.use('/checkboxThemesField', routes.checkboxThemesField);

db.sync({ force: true })
  .then(() => {
    console.log('Connection has been established succesfully.');
    

    app.listen(port, () => console.log(`server started on port ${port}`));
  })

  .catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });

// DB cinfig for my otehr computers
// PORT = 3001;
// DB_NAME = lets_translate_db;
// DB_USER = postgres;
// DB_PASSWORD = 1234;
// DB_HOST = localhost;
