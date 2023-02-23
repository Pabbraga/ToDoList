export default function createClickListener() {
    const noteId = {
        id: []
    }

    function reply_click() {
        console.log(noteId.id[0])
        if(noteId.id.length >= 2) {
            noteId.id.splice(-1)
        } else {
            noteId.id.push(this.id)
        }
    }

    return {
        noteId,
        reply_click
    }
}