import Note from "../model/Note.js";
export const getAllNotes = async (req, res) => {
    try {

       const notes= await Note.find().sort({createdAt: -1});
       res.status(200).json(notes);

    } catch (error) {
        console.error("ERROR IN GET METHOD", error);
        res.status(500).json({message: "Error in server"});
    }
}

export const getNotebyid = async(req, res) => {
    try {

        const specNote = await Note.findById(req.params.id);
        if (!specNote) return res.status(400).json({message: "ID not found"});
        res.status(200).json(specNote);
    } catch (error) {
        console.error("ERROR In FINDBYID", error);
        res.status(500).json({message: "Error in the internal server"});
    }
}

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message: "new note success!"})
    } catch (error) {
        console.error("ERROR IN THE POST REQUEST", error);
        res.status(500).json({message: "Unable to create new note"});
    }
}

export const updateNotes = async (req, res) => {
    try {
        const {title, content}=req.body;
        
        const updatedNote= await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

        if(!updatedNote) return res.status(400).json({message: "ID NOT FOUND"});
        
        res.status(201).json(updatedNote);

    } catch (error) {
        console.error("ERROR IN THE PUT STATEMENT", error);
        res.status(500).json({message: "error in the updaated"});
    }
}

export const deleteNote = async (req, res) => {
    try {
        
        const deleteNote = await Note.findByIdAndDelete(req.params.id);

        if(!deleteNote) return res.status(400).json({message: "Note not found"});

        res.status(202).json({message: "NOTE DELETED"});
    } catch (error) {
        console.error("ERROR IN THE DELETE STATEMENT", error);
        res.status(500).json({message: "Error Deleting!"});
    }
}