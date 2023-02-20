let list = document.getElementById("myList");
let title = document.getElementById("myTitle");

function testButton() {
    console.log();
}

function createNote(data) {
    let stickNote = document.createElement("div");
    stickNote.appendChild(data);
    stickNote.classList.add("note");
    return stickNote;
}

function addNote() {
    let item = document.createElement("li");
    item.innerHTML = title.value;
    list.appendChild(createNote(item));
    return
}