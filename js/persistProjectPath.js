
import fs from "fs";
import populateProjectList from "./populateProjectList";

const persistProjectPath = (path) => {
    // get the contents of the config json file
    fs.readFile('./config/projectPaths.json','utf-8', (err, data) => {
        if(err) {
            console.error(err)
        } else {
            let paths = JSON.parse(data);
            // if the file path has not aready been persisted, then add it to the json and save
            if(!paths.includes(path)){
                paths.push(path);
                fs.writeFile('./config/projectPaths.json', JSON.stringify(paths), (err) => {
                    if(err) console.error(err);
                    populateProjectList();
                })
            }
        }
    })
}

export default persistProjectPath;