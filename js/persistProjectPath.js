
import fs from "fs";

const persistProjectPath = (path) => {
    fs.readFile('./config/projectPaths.json','utf-8', (err, data) => {
        if(err) {
            console.error(err)
        } else {
            let paths = JSON.parse(data);
            if(!paths.includes(path)){
                paths.push(path);
                fs.writeFile('./config/projectPaths.json', JSON.stringify(paths), (err) => {
                    if(err) console.error(err);
                })
            }
        }
    })
}

export default persistProjectPath;