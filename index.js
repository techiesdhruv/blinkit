import express from 'express'
 import cors from 'cors'
 import dotenv from 'dotenv'
 dotenv.config()

 import cookieParser from 'cookie-parser'
 import morgan from 'morgan'
 import helmet from 'helmet'

 import connectDB from './config/connectDB.js'

import userRouter from './route/user.route.js' //importing routes in index file

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet(
    {
        crossOriginResourcePolicy:false

    }
))

app.use(cors({
    credentials:true,
    origin:process.env.FRONTENED_URL
}))


app.get("/",(request,response)=>{
    response.json({
        message:"server is running",PORT
    })
})

app.use('/api/user',userRouter) //calling routes



const PORT =8080|| process.env.PORT



app.listen(PORT,() =>{
    console.log("server is running",PORT)
})
connectDB()