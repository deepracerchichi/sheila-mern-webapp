import mongoose from "mongoose";

export const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB SUCCESSFULLY CONNECTED!")
    } catch (e) {
        console.error("ERROR CONNECTING TO DATABASE", e);
        process.exit(1); //exit with failure
    }
}