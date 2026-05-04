const mongoose = require('mongoose')

const connectDB =async()=>{

    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("database connected successfully");
    }).catch((err)=>{
        console.log("Error connecting to database",err);
    })
}


module.exports=connectDB;