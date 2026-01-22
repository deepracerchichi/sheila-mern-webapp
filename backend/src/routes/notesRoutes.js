import express from "express";
import {createNote, deleteNote, getAllNotes, getNotebyid, updateNotes} from "../controller/notesController.js";

const router= express.Router();

 router.get("/", getAllNotes);
 router.get("/:id", getNotebyid);
 router.post("/", createNote);
 router.delete("/:id", deleteNote);
 router.put("/:id", updateNotes);


 export default router;