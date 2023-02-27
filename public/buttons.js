export default function createButtons() {

    function getButtons() {
        let buttons_container = document.createElement("div")
        buttons_container.classList.add("icons")
        buttons_container.appendChild(editButton())
        buttons_container.appendChild(removeButton())
        return buttons_container
    }

    function removeButton() {
        let remove_button = document.createElement("i")
        let buttonClasses = ["fa-solid", "fa-trash", "icon"]
        for(let i in buttonClasses) {
            remove_button.classList.add(buttonClasses[i])
        }
        return remove_button
    }
    
    function editButton() {
        let edit_button = document.createElement("i")
        let buttonClasses = ["fa-solid", "fa-pen", "icon"]
        for(let i in buttonClasses) {
            edit_button.classList.add(buttonClasses[i])
        }
        return edit_button
    }

    return {
        editButton,
        removeButton,
        getButtons
    }
}