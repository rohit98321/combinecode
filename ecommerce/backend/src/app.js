const express =require("express")
const userAuthRouter=require("./routes/auth.user")
const cookieParser=require("cookie-parser")


const app=express()

app.use(express.json())
app.use(cookieParser())




app.use("/auth",userAuthRouter)



module.exports=app