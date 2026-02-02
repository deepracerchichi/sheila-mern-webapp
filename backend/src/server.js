import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";


// do this first to be able to make the process. env start working
dotenv.config();

const app = express(); // store express in the app constant
const PORT = process.env.PORT || 5001; // store the PORT from the .env file in this constant and if
//...nothing from the .env hen the port to store is 5001

// call this async function here i used to connect to mongo db in the config directory

//middleware
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json());//this will parse the json body of the request
app.use(rateLimiter);

//another example of middleware.
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })


// for all the https links ending with /notes look in the notesRoutes file
app.use("/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log("Server listening on port: ", PORT);
    });
});
//tell app to listen on stored constant erlier called port with value of 5001, and call a function to log message indicating the server is running




