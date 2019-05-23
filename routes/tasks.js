const express = require('express');
const router = express.Router();

const tasksList = require('../mocks/tasks.json')

router.get('/', (req, res) => res.json(tasksList));

router.post('/', (req, res) => {
    const { taskId, title, text, dueDate, status } = req.body;

    const newComment = {
        taskId,
        title,
        text,
        dueDate,
        status
    };

    tasksList.push(newComment);

   return res.sendStatus(200);
})

module.exports = router;
