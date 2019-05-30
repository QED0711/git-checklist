import fs from 'fs';
import { getCurrentProjectPath } from './helpers/getters';

const handleAddChecklistItem = () => {

    const addItemForm = document.getElementById('add-checklist-item');
    addItemForm.onsubmit = async (e) => {
        // e.preventDefault()
        const newItem = [...e.target.children][1].value
        // get path to current project .gitchecklist file
        const path = getCurrentProjectPath() + "/.gitchecklist"
        // read contents of file
        let items = await fs.readFileSync(path, {encoding: 'utf-8'})        
        items += `\n[] ${newItem}`
        console.log(items)
        fs.writeFileSync(path, items)
    }

}

export default handleAddChecklistItem