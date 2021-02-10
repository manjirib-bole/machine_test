const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Machine_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err)=>{
    if(err){
        console.log("Failed to connect.")
    }else{
        console.log("connection successfully.")
    }
});