import fs from 'fs';
import { getCurrentProjectPath } from './helpers/getters';
import { addChecklistItem } from './helpers/setters'



const handleAddChecklistItem = () => {

    const addItemForm = document.getElementById('add-checklist-item');
    addItemForm.onsubmit = (e) => {
        const newItem = [...e.target.children][1].value
        addChecklistItem(newItem)
    }

}

export default handleAddChecklistItem