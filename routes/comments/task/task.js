const express = require('express');
const router = express.Router();

const taskCommentList = require('../../../mocks/taskCommentList.json')

router.get('/', (req, res) => res.json(taskCommentList));

router.post('/', (req, res) => {
    const { author, message } = req.body;

    const newComment = {
        author,
        message
    };

    taskCommentList.push(newComment);

    res.sendStatus(200)
})

module.exports = router;