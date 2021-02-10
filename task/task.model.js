const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title:{ type : String },
    description : { type : String },
    image: { type : String }
},{timestamps :true});

const TaskModel = mongoose.model('task',TaskSchema);

module.exports = { TaskModel};