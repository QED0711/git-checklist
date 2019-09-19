import fs from 'fs';

const initialization = () => {
    fs.exists("./config/projectPaths.json", (exists) => {
        
            if(!exists){
                fs.writeFileSync("./config/projectPaths.json", JSON.stringify([]))
            }
    })
        

}

export default initialization;