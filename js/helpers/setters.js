import fs from 'fs';
import { exec } from 'shelljs';

import { getCurrentProjectPath, getAutoPush, getBranch } from "./getters";

const setChecklist = (html) => {
    document.getElementById("checklist").innerHTML = html
}

const setCheckedInactive = () => {
    let cbs = document.querySelectorAll('.task-checkbox');
    for(let cb of cbs) {
        cb.disabled = cb.checked
        cb.onclick = (e) => {
            cb.disabled = true;
            const value = e.target.value;
            updateGitChecklistFile(value)
            commitTask(value);
        }
    }
}

const updateGitChecklistFile = (value) => {
    // cet the path to the current project gitchecklist file;
    const path = getCurrentProjectPath() + "/.gitchecklist";
    // get the data from that path and read through each line individually
    const data = fs.readFileSync(path, 'utf-8');
    let lines = data.split("\n");
    let updated = ""
    for(let line of lines){
        // check each line to see if it matches the just checked checkbox
        // if so, set it to checked, and move on to the next line
        if(line.includes(value)){
            line = line.replace("[]", "[X]")
        } 
        // store each line in out updated string
        updated += line + "\n";
    }
    
    // write the updated string (but trim it first) to the new file
    fs.writeFileSync(path, updated.trim())
}



const commitTask = async (task) => {
    const path = getCurrentProjectPath();
    console.log(path)
    await exec(`git --git-dir=${path}/.git add .`, {async: true});
    await exec(`git --git-dir=${path}/.git commit -m "${task}"`, {async: true});
    if(getAutoPush()){
        await exec(`git --git-dir=${path}/.git push -u origin ${getBranch()}`, {async: true});
    }
    
}

export {
    setChecklist,
    setCheckedInactive,
}