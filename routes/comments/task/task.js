const express = require('express');
const router = express.Router();

const taskCommentList = require('../../../mocks/taskCommentList.json')

router.get('/', (req, res) => res.json(taskCommentList));

router.post('/', (req, res) => {
    console.log(req.body)
    const newComment = {
        id : req.body.id,
    };

    console.log(req.body)
    taskCommentList.push(newComment);

    res.sendStatus(200)
})

module.exports = router;

