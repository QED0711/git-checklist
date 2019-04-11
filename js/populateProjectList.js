
import fs from 'fs';

const optionItem = (projectPath) => {
    let projectName = projectPath.split("/");
    projectName = projectName[projectName.length - 1];
    return `
        <option value="${projectPath}">${projectName}</option>
    `
}

const populateProjectList = () => {
    const projectList = document.getElementById("project-list")
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
        }
    })
}

export default populateProjectList;

