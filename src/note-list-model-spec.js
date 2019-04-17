console.log("NOTE-LIST OBJECT TESTS");

function instantiated() {
  var noteList = new NoteList;
  assert.isTrue(noteList !== undefined);
};
instantiated();

function hasEmptyArray() {
  var noteList = new NoteList;
  assert.isTrue(isEqual(noteList.list, []));
};

hasEmptyArray();

function addNotes() {
  var noteList = new NoteList;
  var note = new Note;
  noteList.addNote(note);
  assert.isTrue(isEqual(noteList.list, [note]));
};

addNotes();

function returnAllNotes() {
  var noteList = new NoteList;
  var note = new Note;
  noteList.addNote(note);
  assert.isTrue(isEqual(noteList.returnAll(), [note]));
};

returnAllNotes();


function newNote() {
  var noteList = new NoteList;
  var yoda = new Note("Yoda is awesome!");
  noteList.newNote("Yoda is awesome!");
  assert.isTrue(isEqual(noteList.list[0], yoda));
};

newNote();


