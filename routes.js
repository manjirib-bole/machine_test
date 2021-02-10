const express = require('express');
const router = express.Router();
const taskRouter = require('./task/task.route');

router.use('/task',taskRouter);

module.exports = router;