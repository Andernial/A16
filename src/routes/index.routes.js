
import { Router } from "express";
import { UserRouter } from "./User.route.js";

const routers = Router();

routers.use("/user", UserRouter)


export {routers} 

