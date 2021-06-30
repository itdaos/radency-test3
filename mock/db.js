const { createUUID } = require("../helpers/utils");
const { initialNotes } = require("./index");
const { CATEGORY } = require("./scheme");

class DBMock {
  constructor(notes) {
    console.log("created Successfully");
    this.notes = [];
    notes.forEach((element) => {
      this.createNote(element);
    });
  }

  getAllNotes() {
    return this.notes.filter((note) => !note.isArchived);
  }

  getNoteById(id) {
    return this.notes.find((note) => note.id === id);
  }

  deleteNoteById(id) {
    this.notes = this.notes.filter((note) => note.id !== id);
    return id;
  }

  createNote(note) {
    note.id = createUUID(); // not good, very bad
    note.isArchived = note.isArchived || false;
    this.notes.push(note);
    return note;
  }

  editNoteById(id, note) {
    let elem = this.notes.find((note) => note.id === id);
    elem = { ...elem, ...note };
    return elem;
  }

  getSummary() {
    const summary = {};

    return;
  }
}

// Singleton
const DBEmulator = (function () {
  var instance;

  function createInstance(notes) {
    notes = notes || initialNotes;
    const db = new DBMock(notes);
    return db;
  }

  return {
    getInstance: (notes) => {
      if (!instance) {
        instance = createInstance(notes);
      }
      return instance;
    },
  };
})();

module.exports = { DBEmulator };
