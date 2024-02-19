import { seque as database } from "../database/connection.js";
import { MessageEntity } from "../entities/Message.entity.js";





export const createMessage = async ( sender_id, receiver_id, description) =>{
    await database.sync()
   
    const newMessage = MessageEntity.create({
        sender_id, receiver_id, description

    });
    return await newMessage
}


export const getAllMessages = async () =>{
    return await MessageEntity.findAll();
}
