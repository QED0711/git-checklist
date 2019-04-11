
import fs from 'fs';
import readline from 'readline';

import { setChecklist, setCheckedInactive } from './helpers/setters';

const createCheckbox = (data) => {
    const checked = data.includes("[X]");
            
    let commit = data.split(/\[.?\]/);
    commit = commit[commit.length - 1];
    return `
        <input type="checkbox" class="task-checkbox" value="${commit}" ${checked ? "checked" : null}>
        <label>${commit}</label>
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