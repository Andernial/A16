import { seque as database } from "../database/connection.js";
import { UserEntity } from "../entities/User.entity.js";



export const createUser = async ( name, password, email, relationship) =>{
    await database.sync()
   
    const newUser = UserEntity.create({
        name, password, email, relationship

    });
    return await newUser
}


export const getAllUsers = async () =>{
    return await UserEntity.findAll();
}



