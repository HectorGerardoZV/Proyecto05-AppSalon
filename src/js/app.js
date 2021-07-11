let section = 1;
const package = {
    client: "",
    date: "",
    time: "",
    services: []
}

document.addEventListener("DOMContentLoaded", function() {
    insertServices();
    startApp();
});

function startApp() {
    tabs();
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
            //Asignation atributes
            service.dataset.idService = id;
            nameService.textContent = name;
            costService.textContent = `$ ${cost}`;
            service.appendChild(nameService);
            service.appendChild(costService);
            service.classList.add("service");
            service.onclick = servicesEvent;
            sectionServices.appendChild(service);
        });
    } catch (error) {
        console.log(error);
    }
}



function tabs() {
    const tabs = document.querySelectorAll(".tabs button");
    tabs.forEach(tab => {
        tab.addEventListener("click", e => {
            insertSection(e);
        })
    });


}


function insertSection(e) {
    const newSection = parseInt(e.target.dataset.section);
    const servicesSection = document.querySelector(".section__services");
    const apointmentSection = document.querySelector(".section__appointment");
    const summarySection = document.querySelector(".section__summary");
    if (newSection == 1) {
        section = 1;
        servicesSection.classList.remove("hide-section");
        apointmentSection.classList.add("hide-section");
        summarySection.classList.add("hide-section");
    }
    if (newSection == 2) {
        section = 2;
        servicesSection.classList.add("hide-section");
        apointmentSection.classList.remove("hide-section");
        summarySection.classList.add("hide-section");
    }
    if (newSection == 3) {
        section = 3;
        servicesSection.classList.add("hide-section");
        apointmentSection.classList.add("hide-section");
        summarySection.classList.remove("hide-section");
    }

}