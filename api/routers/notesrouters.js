const express = require("express");
const Notes = require("../models/notes");

const router = express.Router();

//save notes

router.post("/notes/save", async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
    const newNote = new Notes({ description });
    const savedNote = await newNote.save();
    res.json({ note: savedNote });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//get Notes
router.get("/notes/get", (req, res) => {
  Notes.find()
    .exec()
    .then((notes) => {
      return res.status(200).json({
        success: true,
        existingNotes: notes,
      });
    })

    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
});

//update Notes

router.put("/notes/update/:id", (req, res) => {
  Notes.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true, runValidators: true } // Return the updated document and run validators
  )
    .then((updatedNote) => {
      if (!updatedNote) {
        return res.status(404).json({
          error: "Note not found",
        });
      }

      return res.status(200).json({
        success: "Update Succesfully",
        data: updatedNote, //Return the update note data
      });
    })

    .catch((err) => {
      console.error(err);
      return res
        .status(400)
        .json({ error: err.message || "An error occurred during the update" });
    });
});

//  Delete Notes

router.delete("/notes/delete/:id", (req, res) => {
  Notes.findByIdAndDelete(req.params.id)
    .then((deletedNote) => {
      if (!deletedNote) {
        return res.status(404).json({
          message: "Note not found",
        });
      }

      return res.json({
        message: "Delete Successful",
        deletedNote,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Delete Unsuccessful",
        error: err.message || err,
      });
    });
});

module.exports = router;
