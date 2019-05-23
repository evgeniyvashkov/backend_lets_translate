const homeRouter = require('./home');
const usersRouter = require('./users');
const tasksRouter = require('./tasks');
const myCommentsRouter = require('./comments/new/comments');
const newCommentsRouter = require('./comments/my/comments');
const tariffs = require('./tariffs');
const users = require('./users');
const taskComment = require('./comments/task/comments');
const checkboxThemesField = require('./checkboxThemesField');

const routes = {
    homeRouter,
    usersRouter,
    tasksRouter,
    myCommentsRouter,
    newCommentsRouter,
    tariffs,
    users,
    taskComment,
    checkboxThemesField
}

module.exports = routes;
