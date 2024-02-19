import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/User.controller.js";
const UserRouter = Router()


UserRouter.post("/createUser", async (req,res)=>{
    const {name,password,email,relationship} = req.body;
    const user = await createUser(name,password,email,relationship)
    res
    .status(201)
    .json({
        message: "User created sucessfully",
        user
    })
})


UserRouter.get("/showUser", async (req,res)=>{
    const users = await getAllUsers()
    res 
    .status(201)
    .json({users})
})

export { UserRouter}