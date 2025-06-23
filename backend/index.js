import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import router from "./router/contact-router.js";
import cors from "cors"


dotenv.config();
const app=express();
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
   app.use(cors(corsOptions))

const PORT=3000;
app.use(express.json());
app.use(router)


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    });
});



