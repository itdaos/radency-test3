class NotesController {
  constructor(db) {
    console.log("Initialized Controller");
    if (!db) {
      const { DBEmulator } = require("../mock/db");
      db = DBEmulator.getInstance();
    }
    this.db = db;
  }

  getAllNotes() {
    return this.db.getAllNotes();
  }

  getNoteById(id) {
    return this.db.getNoteById(id);
  }
}

module.exports = NotesController;
