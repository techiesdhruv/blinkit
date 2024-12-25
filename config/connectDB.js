import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


if(!process.env.MONGODB_URI){
    throw new Error (
        "please provide mongoodb_uri in the dotenve file"
    )
}

async function connectDB() {
try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connect DB")
    
} catch (error) {
    console.log("Mongoose db connect errror",error)
    process.exit(1)
    
}    
}
export default connectDB