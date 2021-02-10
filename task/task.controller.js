const TaskModel = require('./task.model').TaskModel;

const addTask = async(req,res)=>{
    try {
        if(req.file){
            req.body.image = req.file.path;
        }
        const objTask = await TaskModel.create(req.body);
        if(objTask){
            res.status(200).json({
                message : " New task added successfully",
                data: objTask
            })
        }else{
            res.status(400).json({
                message:"Failed to add task."
            })
        }
    } catch (error) {
       console.log(error);
       res.json(error); 
    }
}

const getTaskList = async(req,res)=>{
    try {
        const objTaskList = await TaskModel.find();
        if(objTaskList){
            res.status(200).json({
                message : "Fetch task list successfully",
                data : objTaskList
            })
        }else{
            res.status(400).json({
                message :"Failed to fetch task list."
            })
        }
    } catch (error) {
        console.log(error);
        res.json(error); 
    }
}

const getTaskDetailsById = async(req,res)=>{
    try {
        console.log("tesak")
        const objTaskDetails = await TaskModel.find({ _id : req.params.id});
        if(objTaskDetails){
            res.status(200).json({
                data : objTaskDetails
            })
        }else{
            res.status(400).json({
                message :"Failed to fetch task details."
            })
        }
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

const updateTask = async(req,res)=>{
    try {
        if(req.file){
            req.body.image = req.file.path;
        }
        const objUpdatetask = await TaskModel.findOneAndUpdate({_id : req.body.id},req.body);
        if(objUpdatetask){
            res.status(200).json({message : " task is update successfully"});
        }else{
            res.status(400).json({message : " failed to update task"});
        }

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

const deleteTask = async(req,res)=>{
    try {
        const objTask = await TaskModel.findOneAndDelete({_id : req.body.id});
        if(objTask){
            res.status(200).json({message:"Task is deleted successfully."})
        }else{
            res.status(400).json({message : "Failed to delete task."})
        }
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {
    addTask,
    getTaskList,
    getTaskDetailsById,
    updateTask,
    deleteTask
}