const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project');

const project_name = document.getElementById('project-name');
const project_url = document.getElementById('project-url');

function projectDescription () {
    fetch(`https://api.github.com/repos/emma-alv/${project}`)
    .then(res => res.json())
    .then(data => {
        const project_description = data.description
        project_name.innerText = `${project_description}`
    })
}

if (project) {
    project_url.src = `https://emma-alv.github.io/${project}/README.md`
    projectDescription()
} else {
    const content = document.getElementById('project-content')
    content.innerHTML = "<h2> Project not selected. Please try again</h2>"
}
