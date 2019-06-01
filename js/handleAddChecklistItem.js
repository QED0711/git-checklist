import { getNewItemIndent, getNewItemCommit } from './helpers/getters';
import { addChecklistItem } from './helpers/setters'



const handleAddChecklistItem = () => {

    const addItemForm = document.getElementById('add-checklist-item');
    addItemForm.onsubmit = (e) => {
        const itemIndent = getNewItemIndent()
        const newItem = "    ".repeat(itemIndent) + "[] " + getNewItemCommit()

        addChecklistItem(newItem)
    }

}

export default handleAddChecklistItem