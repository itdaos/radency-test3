var express = require("express");
var router = express.Router();
var NotesController = require("../repository/NotesController");
const controller = new NotesController();

/* GET home page. */
router.get("/", function (req, res, next) {
  const data = controller.getAllNotes();
  res.send(data);
});

router.get("/:noteId", function (req, res, nex) {
  const { noteId } = req.params;
  const data = controller.getNoteById(noteId);
  res.send(data);
});

module.exports = router;
