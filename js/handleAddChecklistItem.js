import { getNewItemIndent } from './helpers/getters';
import { addChecklistItem } from './helpers/setters'



const handleAddChecklistItem = () => {

    const addItemForm = document.getElementById('add-checklist-item');
    addItemForm.onsubmit = (e) => {
        const itemIndent = getNewItemIndent()
        const newItem = "    ".repeat(itemIndent) + "[] " + [...e.target.children][2].value

        addChecklistItem(newItem)
    }

}

export default handleAddChecklistItem