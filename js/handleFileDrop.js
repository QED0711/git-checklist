import persistProjectPath from "./persistProjectPath";
import { exec } from 'shelljs';

import { hasGitChecklistFile } from './helpers/getters';

const handleFileDrop = () => {
    const fileDrop = document.getElementById("file-drop");
    
    fileDrop.ondragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }     
    
    fileDrop.ondrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        for(let file of e.dataTransfer.files){
            if(hasGitChecklistFile(file.path)){
                persistProjectPath(file.path)
            } else {
                const response = confirm("The directory you have added does not have a .gitchecklist file. Would you like to add one?")
                if(response){
                    await exec(`touch ${file.path}/.gitchecklist`, {async: true});
                    persistProjectPath(file.path);
                }
            }
            
        }
    }

}


export default handleFileDrop;