function NoteList() {
  this.list = [];
};

NoteList.prototype.addNote = function(note) {
  this.list.push(note);
};

NoteList.prototype.returnAll = function() {
  return this.list;
};

NoteList.prototype.newNote = function(text) {
  this.list.push(new Note(text));
};
