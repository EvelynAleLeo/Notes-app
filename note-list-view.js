(function (exports) {
  
  // noteslist argument paramater only takes a NoteList object
  // as default
  function NoteListView(noteslist = NoteList) {
    this.noteslist = noteslist;
  };
  
  NoteListView.prototype.returnNoteList = function() {
    return this.noteslist;
  };

  NoteListView.prototype.returnHTML = function() {
    html = [];
    this.noteslist.list.forEach(function(note) {
      html.push("<ul><li>" + note.text + "</li></ul>")
    });
    return html.join('');
  };



  exports.NoteListView = NoteListView;

})(this)





