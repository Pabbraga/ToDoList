export default function createButtons() {
    
    function removeButton(commands) {
        let remove_button = document.createElement("i")
        let buttonClasses = ["fa-solid", "fa-trash", "icon"]
        for(let i in buttonClasses) {
            remove_button.classList.add(buttonClasses[i])
        }
        remove_button.onclick = commands
        return remove_button
    }
    
    function editButton(commands) {
        let edit_button = document.createElement("i")
        let buttonClasses = ["fa-solid", "fa-pen", "icon"]
        for(let i in buttonClasses) {
            edit_button.classList.add(buttonClasses[i])
        }
        edit_button.onclick = commands
        return edit_button
    }
    
    return {
        editButton,
        removeButton
    }
}