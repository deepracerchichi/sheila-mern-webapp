import mongoose from "mongoose";

// First create a schema
// Create a model based off of the schema earlier created 

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true} //mongodb will make a createdAt and updatedAt for you
);

//capitalize the first letter
const Note = mongoose.model("Note", noteSchema);

export default Note;