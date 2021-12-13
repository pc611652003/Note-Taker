const router = require('express').Router();
let db = require('../../db/db');
const { createNewNote, removeNote } = require('../../lib/notes');

// getNotes
router.get('/notes', (req, res) => {
    let results = [];
    for (var i = 0; i < db.length; i++) {
        let item = {
            "id" : (i+1),
            "title": db[i].title,
            "text": db[i].text
        };
        results.push(item);
    }
    res.json(results);
});

// saveNote
router.post('/notes', (req, res) => {
  let newNoteInfo = req.body;
  let newNote = createNewNote(newNoteInfo, db);
  res.json(newNote);
});

// deleteNote
router.delete('/notes/:id', (req, res) => {
  let newNoteArray = removeNote(req.params.id, db);
  res.json(newNoteArray);
});

module.exports = router;