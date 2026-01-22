import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";

// do this first to be able to make the process. env start working
dotenv.config();

const app = express(); // store express in the app constant
const PORT = process.env.PORT || 5001; // store the PORT from the .env file in this constant and if
//...nothing from the .env hen the port to store is 5001

connectDB();// call this async function here i used to connect to mongo db in the config directory

//middleware
app.use(express.json());


// for all the https links ending with /notes look in the notesRoutes file
app.use("/notes", notesRoutes);

//tell app to listen on stored constant erlier called port with value of 5001, and call a function to log message indicating the server is running
app.listen(PORT, ()=> {
    console.log("Server listening on port: ", PORT);
});



