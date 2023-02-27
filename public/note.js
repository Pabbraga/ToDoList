export default function createNote() {

    const stickNote = function(data, buttons_container) {
        let stickNote = data
        stickNote.classList.add("note")
        stickNote.id = Math.floor(Date.now() * Math.random()).toString(36)
        stickNote.insertAdjacentElement("beforeend", buttons_container)
        return stickNote
    }

    function addNote(buttons_container) {
        let list = document.getElementById("myList")
        let title = document.getElementById("myTitle")
        let item = document.createElement("li")
        if(title) {
            item.innerHTML = title.value
            list.appendChild(stickNote(item, buttons_container))
        }
    }
    
    function editNote() {
        console.log('editou') 
    }
    
    return {
        stickNote,
        addNote,
        editNote
    }
}