import setProjectBanner from "./setProjectBanner";

const handleSelectChange = () => {
    document.getElementById("project-list").onchange = (e) => {
        setProjectBanner();
    }
}

export default handleSelectChange