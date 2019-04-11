
import fs from 'fs';
import setProjectBanner from './setProjectBanner';
import getChecklistData from "./getChecklistData"
import { getCurrentProjectPath } from './helpers/getters';

const optionItem = (projectPath) => {
    let projectName = projectPath.split("/");
    projectName = projectName[projectName.length - 1];
    return `
        <option value="${projectPath}">${projectName}</option>
    `
}

const populateProjectList = () => {
    // get the project list select element and reset it to have no options
    const projectList = document.getElementById("project-list")
    projectList.innerHTML = ""
    let options = "";
    
    fs.readFile('./config/projectPaths.json', "utf-8", (err, data) => {
        if(err) {
            console.error(err);
        } else {
            let paths = JSON.parse(data);
            for(let path of paths){
                options += optionItem(path);
            }
            projectList.innerHTML = options;
            setProjectBanner();
            getChecklistData(getCurrentProjectPath());
            
        }
    })
}

export default populateProjectList;

