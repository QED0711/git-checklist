
import fs from 'fs';
import readline from 'readline';

import { setChecklist, setCheckedInactive } from './helpers/setters';

const createCheckbox = (data) => {
    const checked = data.includes("[X]");
            
    let commit = data.split(/\[.?\]/);
    const indentCount = commit[0].length
    console.log({indentCount})
    return `
        <input type="checkbox" class="task-checkbox" value="${commit}" ${checked ? "checked" : null} style="margin-left: ${indentCount}em">
        <label>${commit[1]}</label>
        <br>
    `
}

const getChecklistData = (path) => {    

    let html = ""
        
    let lines = fs.readFileSync(path + '/.gitchecklist', "utf-8");
    lines = lines.split("\n");

    for(let line of lines){
        html += createCheckbox(line);    
    }
    setChecklist(html);
    setCheckedInactive();
    
    
}

export default getChecklistData;