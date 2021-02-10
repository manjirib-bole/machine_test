const express = require('express');
const taskRouter = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/upload/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
var upload = multer({
    storage : storage,
    fileFilter : fileFilter
}).single('image');

const taskController = require('./task.controller');

taskRouter.post('/add-task',upload,taskController.addTask);

taskRouter.get('/get-task-list',taskController.getTaskList);

taskRouter.get('/get-task-details/:id',taskController.getTaskDetailsById);

taskRouter.put('/update-task',upload,taskController.updateTask);

taskRouter.delete('/delete-task',taskController.deleteTask);

module.exports = taskRouter;
