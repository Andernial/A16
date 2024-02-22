import { Router } from "express";
import { createMessage, getAllMessages } from "../controllers/Message.controller.js";
const MessageRouter = Router();


MessageRouter.post("/createMessage", createMessage)




MessageRouter.get("/showMessage", getAllMessages)


export {MessageRouter}