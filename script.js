let list = document.getElementById("myList");
let title = document.getElementById("myTitle");
let setId = "";

function testButton() {
    console.log();
}

function createNote(data) {
    let stickNote = data;
    stickNote.classList.add("note");
    stickNote.setAttribute("id", Math.floor(Date.now() * Math.random()).toString(36));
    stickNote.setAttribute("onclick", "reply_click(this.id)")
    stickNote.insertAdjacentElement("beforeend", generate_icons());
    return stickNote;
}

function reply_click(clicked_id) {
    setId = clicked_id;
}

function generate_icons() {
    let icons = [["fa-solid", "fa-pen", "icon"], ["fa-solid", "fa-trash", "icon"], ["fa-solid", "fa-plus", "icon"]];
    let res = document.createElement("div");
    res.classList.add("icons");
    for(let i in icons) {
        let icon = document.createElement("i");
        icon.classList.add(icons[i][0]);
        icon.classList.add(icons[i][1]);
        icon.classList.add(icons[i][2]);
        res.appendChild(icon);
    }
    return res;
}

function addNote() {
    let item = document.createElement("li");
    item.innerHTML = title.value;
    list.appendChild(createNote(item));
}

function editNote() {
    let item = document.getElementById();
}

function removeNote(id) {
    let item = document.getElementById(id);
    if(item.parentNode) {
        item.parentNode.removeChild(item);
    }
}