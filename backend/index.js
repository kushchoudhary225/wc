import express from 'express';
import dbConnect from './conn/conn.js';
import Route from './route/route.js'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const PORT = 8000;
app.use(cors())
app.use(bodyParser.json({extended : true,}))
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',Route)
dbConnect();
app.listen(PORT, () => console.log("Server is running at port 8000"));