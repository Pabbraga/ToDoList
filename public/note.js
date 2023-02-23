export default function createNote() {

    const stickNote = function(data, buttons, onClick) {
        let stickNote = data
        stickNote.classList.add("note")
        stickNote.id = Math.floor(Date.now() * Math.random()).toString(36)
        stickNote.onclick = onClick
        stickNote.insertAdjacentElement("beforeend", buttons)
        return stickNote
    }

    function addNote(buttons, onClick) {
        let list = document.getElementById("myList")
        let title = document.getElementById("myTitle")
        let item = document.createElement("li")
        if(title) {
            item.innerHTML = title.value
            list.appendChild(stickNote(item, buttons, onClick))
        }
    }
    
    function editNote() {
        // let item = document.getElementById(note)
        // if(item) {
    
        // } else {
        //    throw error
        // }
        console.log("editou!")
    }
    
    function removeNote(id) {
        // let item = document.getElementById(id)
        // item.remove()
        console.log("removeu!")
    }

    return {
        stickNote,
        addNote,
        editNote,
        removeNote
    }
}