// src/index.ts
import express from 'express';
import { dbConnect } from './config/db';
import dotenv from 'dotenv'
import { resolve } from 'path';
import bodyParser = require('body-parser');
import router from './routes/route.manager';
dotenv.config({path:resolve(__dirname,'./config/config.env')})
dbConnect();
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',router)
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
