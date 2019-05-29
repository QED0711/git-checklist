import fs from 'fs';


const getCurrentProjectPath = () => {
    return document.getElementById("project-list").value;
}

const getCurrentProjectName = () => {
    let projectPath = document.getElementById("project-list").value;
    projectPath = projectPath.split("/")
    return projectPath[projectPath.length - 1];
}

const getAutoPush = () => {
    return document.getElementById("push").checked;
}

const getBranch = () => {
    return document.getElementById("branch").value
}

const hasGitChecklistFile = (path) => {
    return fs.existsSync(path + '/.gitchecklist')
}

export {
    getCurrentProjectPath,
    getCurrentProjectName,
    getAutoPush,
    getBranch,
    hasGitChecklistFile,
}

