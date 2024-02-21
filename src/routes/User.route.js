import { Router } from "express";
import { createUser, deleteColumn, getAllUsers, updateName } from "../controllers/User.controller.js";
const UserRouter = Router()


UserRouter.post("/createUser", createUser)


UserRouter.get("/showUser", getAllUsers)

UserRouter.patch("/updateUser/:id", updateName)

UserRouter.delete("/deleteUser/:id", deleteColumn)


export { UserRouter}