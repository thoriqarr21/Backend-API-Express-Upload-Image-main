import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "../routes/ProductRoute.js";

const app = express();
const serverless = require('serverless-http');


app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use('.netlify/src/index',ProductRoute);
app.listen(5030, ()=> console.log('Server Up and Running...'));
module.exports.hadler = serverless(app)