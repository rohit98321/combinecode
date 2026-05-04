const userModel=require("../Models/user.model.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registerController = async(req,res)=>{

    const {fullname,email,password}=req.body


    const existemail=await userModel.findOne({email})

    if(existemail){
        return res.status(400).json({message:"email already exist"})
    }

    const hashpassword = await bcrypt.hash(password,10)
    
    try {
        const user =await userModel.create({
            fullname,
            email,
            password:hashpassword
        })

        const token =jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})

        res.cookies("token",token)
        res.json({message:"user registered successfully",user})


        
    } catch (error) {
        res.json({message:"something went wrong",error:error.message})
    }


    console.log("register controller called",fullname,email,password);
}


module.exports={registerController}