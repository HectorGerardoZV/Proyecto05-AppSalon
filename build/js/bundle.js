let section = 1;
let content;

document.addEventListener("DOMContentLoaded", () => {
    startApp();
});

function startApp() {
    events();

}

function events() {
    const tabs = document.querySelectorAll(".tabs button");
    tabs.forEach(tab => {
        tab.addEventListener("click", e => {
            insertSection(e);
        })
    });
}


function insertSection(e) {
    const newSection = parseInt(e.target.dataset.section);
    if (newSection == 1) {
        console.log("Estamos en la section 1");
    }
    if (newSection == 2) {
        console.log("Estamos en la section 2");
    }
    if (newSection == 3) {
        console.log("Estamos en la section 3");
    }

}


