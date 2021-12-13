const fs = require('fs');
const path = require('path');

// Push the new Note into the Note Array and Update JSON file
// Return the new Note
function createNewNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteArray, null, 2)
  );
  return note;
}

// Remove the Note from the Note Array According to the ID provided
// the unique ID is the index of the Note Array
function removeNote(id, noteArray) {
  let targetID = id - 1;
  noteArray.splice(targetID, 1);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(noteArray, null, 2)
  );
  return noteArray;
}

module.exports = {
    createNewNote,
    removeNote
};