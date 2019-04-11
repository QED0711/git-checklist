
const getCurrentProjectPath = () => {
    return document.getElementById("project-list").value;
}

const getCurrentProjectName = () => {
    let projectPath = document.getElementById("project-list").value;
    projectPath = projectPath.split("/")
    return projectPath[projectPath.length - 1];
}

export {
    getCurrentProjectPath,
    getCurrentProjectName,
}

