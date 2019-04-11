import persistProjectPath from "./persistProjectPath";


const handleFileDrop = () => {
    const fileDrop = document.getElementById("file-drop");
    
    fileDrop.ondragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }     
    
    fileDrop.ondrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        for(let file of e.dataTransfer.files){
            console.log(file.path)
            persistProjectPath(file.path)
            
        }
    }

}


export default handleFileDrop;