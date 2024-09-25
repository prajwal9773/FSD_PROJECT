import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connectdb.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


import authRoutes from "./routes/auth_route.js";
dotenv.config();

const app = express();

// app.get("/", (req,res)=>{
//     res.send("Hello World");
// })

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173", credentials:true}));




app.use('/api/auth', authRoutes);
 


app.listen(PORT, ()=>{
    connectDB();
    console.log('Server is running on port 3000');
});

//4E2fc0C2htONUUzx
//mongodb+srv://prajwalkum03airs:4E2fc0C2htONUUzx@auth.nn4ln.mongodb.net/