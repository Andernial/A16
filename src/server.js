import express from "express";
import { testConnection } from "./database/connection.js";
import { CategoryRoute } from "./routes/Category.route.js";
import { UserRouter } from "./routes/User.route.js";
import { MessageRouter } from "./routes/Message.route.js";
const app = express();
const port = 3232;

app.use(express.json());
app.use(CategoryRoute)
app.use(UserRouter)
app.use(MessageRouter)

app.listen(port, ()=> {
    testConnection()
    console.log("server running")
});