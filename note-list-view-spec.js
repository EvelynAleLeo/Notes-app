console.log("NOTE-LIST-VIEW OBJECT TESTS");

function instantiated() {
  // create variable of new NoteListView passing in a new notelist object
  var noteListView = new NoteListView(new NoteList());

  assert.isTrue(noteListView !== undefined);
};
instantiated();

function testReturnHTMLWithNoNotes(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === "");
}
testReturnHTMLWithNoNotes();

function testReturnStringOfHTML(){
  var noteList = new NoteList();
  noteList.newNote("Test note")
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === "<ul><li>Test note</li></ul>");
}

testReturnStringOfHTML();

function testReturnsMultipleStrings(){
  var noteList = new NoteList();
  noteList.newNote("Test note")
  noteList.newNote("Test note 2")
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === "<ul><li>Test note</li></ul><ul><li>Test note 2</li></ul>");
}

testReturnsMultipleStrings();