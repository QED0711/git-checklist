
const setChecklist = (html) => {
    document.getElementById("checklist").innerHTML = html
}

const setCheckedInactive = () => {
    let cbs = document.querySelectorAll('.task-checkbox');
    for(let cb of cbs) {
        cb.disabled = cb.checked
    }
}

export {
    setChecklist,
    setCheckedInactive,
}