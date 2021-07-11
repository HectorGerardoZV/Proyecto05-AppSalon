let section = 1;
const package = {
    name: "",
    cost: "",
    client: "",
    date: "",
    time: ""
}

document.addEventListener("DOMContentLoaded", function() {
    insertServices();
    events();
});

function startApp() {
    events();

}

async function insertServices() {
    try {
        const sectionServices = document.querySelector(".services");
        const result = await fetch("../../services.json");
        const data = await result.json();
        const { services } = data;
        services.forEach(value => {
            const { id, name, cost } = value;
            //Creation
            const service = document.createElement("DIV");
            const nameService = document.createElement("P");
            const costService = document.createElement("P");
            //Asignation
            service.dataset.idService = id;
            nameService.textContent = name;
            costService.textContent = `$ ${cost}`;
            service.appendChild(nameService);
            service.appendChild(costService);
            service.classList.add("service");
            sectionServices.appendChild(service);

        });

    } catch (error) {
        console.log(error);
    }
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
        section = 1;

    }
    if (newSection == 2) {
        section = 2;


    }
    if (newSection == 3) {
        section = 3;

    }



}