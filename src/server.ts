import express from "express"
import bodyParser from "body-parser"
import logger from "morgan"
import dotenv from "dotenv"
dotenv.config({path:"../.env"})
const app=express()
import userRouter from "./routes/user.route"
import { dbConnect } from "./config/database.config"

// =======================================Middlewares=====================================

app.use(bodyParser.json())
app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
  );
  app.use(logger("dev"));
  app.use(express.json({ limit: "50mb" }));

// ===========================================Routes===================================
app.use('/user',userRouter)



// MongoDB Connect
dbConnect()
// =======================================Server=====================================
app.listen(process.env.PORT,()=>{
    console.log(`Server is running in the port ${process.env.PORT}`);
    
})