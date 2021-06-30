var express = require("express");
var router = express.Router();
var NotesController = require("../repository/NotesController");
const controller = new NotesController();

/* GET home page. */
router.get("/", function (req, res, next) {
  const notes = controller.getAllNotes();
  res.send(notes);
});

router.get("/stats", function (req, res, next) {
  const summary = controller.getSummary();
  res.send(summary);
});

router.post("/", function (req, res, nex) {
  const note = { ...req.body };
  const resp = controller.createNote(note);
  res.send(resp);
});

router.get("/:noteId", function (req, res, next) {
  const { noteId } = req.params;
  const note = controller.getNoteById(noteId);
  res.send(note);
});

router.patch("/:noteId", function (req, res, next) {
  const { noteId } = req.params;
  const resp = controller.editNoteById(noteId, req.body);
  res.send(resp);
});

router.delete("/:noteId", function (req, res, next) {
  const { noteId } = req.params;
  const resp = controller.deleteNoteById(noteId);
  res.send(resp);
});

module.exports = router;
