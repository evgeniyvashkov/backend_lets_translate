require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
//для хранения сессии в sesson store, передаем туда саму сессию
const FileStore = require('session-file-store')(session);
const passport = require('passport');

//routs
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const myCommentsRouter = require('./routes/comments/new/comments');
const newCommentsRouter = require('./routes/comments/my/comments');
const tariffs = require('./routes/tariffs');
const users = require('./routes/users');
const taskComment = require('./routes/comments/task/task');
const checkboxThemesField = require('./routes/checkboxThemesField');

const app = express();
const port = process.env.PORT || 3001;

//Models
const { db } = require('./db');
const { User } = require('./models/testModel');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//use routs
app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/myComments', myCommentsRouter);
app.use('/newComments', newCommentsRouter);
app.use('/tariffs', tariffs);
app.use('/users', users);
app.use('/taskComments', taskComment);
app.use('/checkboxThemesField', checkboxThemesField);

//подключение сессии
app.use(
  session({
    secret: 'testSecret',
    store: new FileStore(),//чтобы не терять сессии при рестарте сервера
    cookie: {
      path: '/',
      httpOnly: true,//чтобы куки были доступны только для сервера, т.е. клиентский JS не имеет доступа
      maxAge: 60 * 60 * 1000 //жизненный цикел куки в мс  
    },
    resave: false,
    saveUninitialized: false
  })
)

require('./config/passport-config');

app.use(passport.initialize());
app.use(passport.session());

app.get('/admin', (req, res) => {
  res.send('Admin page, brother')
})

app.post('/login', (res, req, next) => {
  
})






db.sync({ force: true })
  .then(() => {
    console.log('Connection has been established succesfully.');
    app.listen(port, () => console.log(`server started on port ${port}`));
    User.create({
      email: 'zheka@prb.com',
      userName: 'zheka',
      cardNumber: '1111111111111111',
      password: '123'
    });
  })

  .catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });

// PORT = 3001;
// DB_NAME = lets_translate_db;
// DB_USER = postgres;
// DB_PASSWORD = 1234;
// DB_HOST = localhost;
