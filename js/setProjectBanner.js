
import { getCurrentProjectName, getCurrentProjectPath } from './helpers/getters';

const setProjectBanner = () => {
    let path = getCurrentProjectPath();

    let banner = document.getElementById("project-banner");
    banner.children[0].innerText = path
}

export default setProjectBanner