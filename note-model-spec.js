console.log("NOTE OBJECT TESTS");

function instantiated() {
  var note = new Note();
  assert.isTrue(note !== undefined);
};
instantiated();

function instantiatedWithText() {
  var textNote = new Note("Yoda is great!");
  assert.isTrue(textNote.text === "Yoda is great!");
};

instantiatedWithText();