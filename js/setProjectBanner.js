
import { getCurrentProjectName, getCurrentProjectPath } from './helpers/getters';

const setProjectBanner = () => {
    let name = getCurrentProjectName();
    let path = getCurrentProjectPath();

    let banner = document.getElementById("project-banner");
    banner.children[0].innerText = name
    banner.children[1].innerText = path
}

export default setProjectBanner