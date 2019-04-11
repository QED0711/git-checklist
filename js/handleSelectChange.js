import setProjectBanner from "./setProjectBanner";
import { getCurrentProjectName, getCurrentProjectPath } from './helpers/getters';
import getChecklistData from "./getChecklistData";

const handleSelectChange = () => {
    document.getElementById("project-list").onchange = (e) => {
        setProjectBanner();
        getChecklistData(getCurrentProjectPath())
    }
}

export default handleSelectChange