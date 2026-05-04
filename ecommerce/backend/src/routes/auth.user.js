const express=require("express")
const userAuth=require("../Controller/AuthController.js")

const router=express.Router()


router.post("/user/register",userAuth.registerController)



module.exports=router