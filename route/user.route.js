// import { Router } from "express";
//  import { registerUserController } from "../Controller/user.controller.js";
//  const userRouter=Router()

//  userRouter.post('/register',registerUserController)
//  export default userRouter
 

 import { Router } from 'express'
  import {registerUserController} from "../Controller/user.controller.js";

const userRouter = Router()

userRouter.post('/register',registerUserController)
export default userRouter