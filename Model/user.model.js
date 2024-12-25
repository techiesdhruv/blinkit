import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:[true,"provide email"] //this is when u want to show error
    },
    password:{
        type:String,
        required:[true,"provide password"]
    },
    avatar:{
        type:String,
        default:""//empty
    },
    mobile:{
        type:Number,
        default:null
    },
    refresh_token:{
        type:String,
        default:""
    },
    verify_email:{
        type:Boolean,
        default:false //when new users comes then default value will be false because there is no requirment for verify_email
    },
    last_login_date:{
        type:Date,
        dafault:""
    },
    status:{
        type:String,
        enum:["Active","Inactive","Suspended"],
        default:"Active" //when new user comes
    },
    address_detail:[{
        type:mongoose.Schema.ObjectId,
        ref:"address"  //iss nama se ek or schema reheaga uska referal he
    }
],
shopping_cart:[
    {
        type:mongoose.Schema.ObjectId,
        ref: "CartProduct"
    }
],
orderHistory:[
    {
        type:mongoose.Schema.ObjectId,
        ref:"order"
    }
],
forgot_password_otp:
    {
        type:String,
        default:null
    },
    forgot_password_expiry:
    {
        type:String,
        default:""
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
    }
 },
       { timestamps:true //this will show the time when the user created and updated at in db

}
)
const UserModel = mongoose.model("User",userSchema) //(name that you want to show in db,name you give this whole model)

export default UserModel



