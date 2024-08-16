const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
console.log(process.env.PORT);
const port = process.env.PORT || 3000;
const auth=require("./middleware/authCheck")

//import routes
const noteRoutes = require("./routers/notesrouters");
// const userRoutes = require("./routers/userrouters");

//app middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" })); // Configure CORS

//routes middleware
app.use('/api',noteRoutes);
// app.use('/api',auth,userRoutes);

const Db_URL =
  "mongodb+srv://udith:1234@cluster0.bm86ddg.mongodb.net/notesManage?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(Db_URL)
  .then(() => {
    console.log("DB Connected");
    console.log(mongoose.version);
  })
  .catch((err) => console.log("DB Connection error", err));

app.listen(port, () => console.log(`App is running on port ${port}`));
