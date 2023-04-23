import express from "express";
import routes from './routes/index.js';

import mongoose from "mongoose";

import cors from "cors"

import { APP_PORT,DB_URL } from './config/index.js';
import errorHandler from "./middlewares/errorHandler.js";

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const app = express();


const corsOptions ={
   origin:'*', 
   credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 


const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('DB connected')
})



app.use(express.json());

 app.use('/api',routes);

 app.use(errorHandler);



app.listen(APP_PORT,()=>{
    console.log(`listning on port ${APP_PORT}`)
})
