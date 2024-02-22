import { seque as database } from "../database/connection.js";
import { MessageEntity } from "../entities/Message.entity.js";





export const createMessage = async ( req,res) =>{
    await database.sync()
    const {sender_id, receiver_id, description} = req.body;
    const newMessage = MessageEntity.create({
        sender_id, receiver_id, description

    });
 
 
    res
    .status(201)
    .json({
        message: "User created sucessfully",
        newMessage
    })
}


export const getAllMessages = async (req,res) =>{
    const message = await getAllMessages()
    res 
    .status(201)
    .json({message})
}

