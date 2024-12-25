import UserModel from '../Model/user.model.js'
import bcryptjs from 'bcryptjs'

export async function registerUserController(req,res) {

    try{
        const{name,email,password}=req.body

if(!name||!email||!password){
    return res.status(400).json({
        message:"provide email,name,password",
        error:true,
        success:false
    })

}  
const user = await UserModel.findOne({email})
if(user){
    return res.json({
        message:"Already registered",
        error:true,
        success:false
    })
}

const salt = await bcryptjs.genSalt(10)
const hashPassword=await bcryptjs.hash(password,salt) // password bo name he jo body me email, name ke sath liya jaa raha he

const payload = {
    name,
    email,
    password:hashPassword
}
const newUser = new UserModel(payload)
const save =await newUser.save()
return res.json({
    message:"User Registered Successfully",
    error:false,
    success:true,
    data:save
})
}catch(error){
    return res.status(500).json({
        message:error.message||error,
        error:true,
        success:false
    })
}
    
}