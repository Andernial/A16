import { Router } from "express";
import { createMessage, getAllMessages } from "../controllers/Message.controller.js";
const MessageRouter = Router();


MessageRouter.post("/createMessage", async (req,res)=>{
    const {sender_id, receiver_id, description} = req.body;
    const messageReturn = await createMessage(sender_id, receiver_id, description)
    res
    .status(201)
    .json({
        message: "User created sucessfully",
        messageReturn
    })
})


MessageRouter.get("/showMessage", async (req,res)=>{
    const message = await getAllMessages()
    res 
    .status(201)
    .json({message})
})

export {MessageRouter}