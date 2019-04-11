
import fs from 'fs';

const getChecklistData = (path) => {
    let data = fs.readFileSync(path + '/.gitchecklist', 'utf-8');
    console.log(data)
}

export default getChecklistData;