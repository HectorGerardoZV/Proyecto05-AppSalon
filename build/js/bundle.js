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
    addAppointment();
    addSummary();

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
function addAppointment() {
    addNameClient();
    addDateClient();
    addTimeClient();
}


function addNameClient() {
    const name = document.querySelector("#name");
    name.addEventListener("input", e => {
        let nameValue = e.target.value;
        if (nameValue.length > 0 && nameValue.length < 3) {
            const labelAlert = document.querySelector(".alert");
            if (labelAlert) {
                return;
            }

            const alert = document.createElement('DIV');
            alert.textContent = "The name is too short";
            alert.classList.add('alert');

            const appointment = document.querySelector(".section__appointment");
            appointment.appendChild(alert);

        } else if (nameValue.length == 0) {
            const labelAlert = document.querySelector(".alert");
            if (labelAlert) {
                labelAlert.remove();

                const alert = document.createElement('DIV');
                alert.textContent = "Complete the name";
                alert.classList.add('alert');

                const appointment = document.querySelector(".section__appointment");
                appointment.appendChild(alert);

            }
        } else {
            const labelAlert = document.querySelector(".alert");
            if (labelAlert) {
                labelAlert.remove();
            }
            package.client = name.value;
        }

    });
}


function addDateClient() {
    const dateLabel = document.querySelector("#date");

    dateLabel.addEventListener("input", e => {
        const date = (dateLabel.value);
        package.date = date;

    });

}


function addTimeClient() {
    const time = document.querySelector("#time");
    time.addEventListener("input", () => {
        package.time = time.value;

    });
}
function servicesEvent(e) {
    let service;
    if (e.target.tagName == "P") {
        service = e.target.parentElement;
    } else {
        service = e.target;
    }

    if (service.classList.contains("selected")) {
        service.classList.remove("selected");
        const idService = parseInt(service.dataset.idService);
        removeService(idService);
    } else {
        service.classList.add("selected");
        const data = {
            id: parseInt(service.dataset.idService),
            nombre: service.firstElementChild.textContent,
            precio: service.firstElementChild.nextElementSibling.textContent
        }
        addService(data);

    }


}



function addService(service) {
    const { services } = package;
    package.services = [...services, service];
}

function removeService(idService) {
    const { services } = package;
    package.services = services.filter(service => service.id != idService);
}
function addSummary() {

    summaryButtonListen();
}


function summaryButtonListen() {
    const summaryButton = document.querySelector("#summary");
    summaryButton.addEventListener("click", () => {
        showSummary();
    });
}

function showSummary() {

    const client = document.querySelector("#name");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    const { services } = package;
    const section = document.querySelector(".section__summary");

    if (client.value == 0 || date.value == 0 ||
        time.value == 0 || services.length == 0) {
        const exist = document.querySelector(".message");

        if (exist) {
            exist.remove();
        }
        const message = document.createElement("DIV");
        message.textContent = "Please chose or select the inputs";
        message.classList.add("message");
        section.appendChild(message);
    } else {
        const exist = document.querySelector(".message");
        if (exist) {
            exist.remove();
        }
        const clientLabel = document.createElement("H3");
        clientLabel.textContent = "Client";

        const clientSection = document.createElement("DIV");
        //Labels
        const clientNameLabel = document.createElement("P");
        clientNameLabel.textContent = "Name:";
        const clientDateLabel = document.createElement("P");
        clientDateLabel.textContent = "Date:";
        const clientTimeLabel = document.createElement("P");
        clientTimeLabel.textContent = "Time:";
        //Content
        const clientNameContent = document.createElement("P");
        clientNameContent.textContent = package.client;
        const clientDateContent = document.createElement("P");
        clientDateContent.textContent = package.date;
        const clientTimeContent = document.createElement("P");
        clientTimeContent.textContent = package.time;

        //Asignation of divs
        //Name
        const cientNameDiv = document.createElement("DIV");
        cientNameDiv.appendChild(clientNameLabel);
        cientNameDiv.appendChild(clientNameContent);
        //Date
        const cientDateDiv = document.createElement("DIV");
        cientDateDiv.appendChild(clientDateLabel);
        cientDateDiv.appendChild(clientDateContent);
        //Hour
        const cientTimeDiv = document.createElement("DIV");
        cientTimeDiv.appendChild(clientTimeLabel);
        cientTimeDiv.appendChild(clientTimeContent);
        //Div client
        clientSection.appendChild(cientNameDiv);
        clientSection.appendChild(cientDateDiv);
        clientSection.appendChild(cientTimeDiv);

        //Inyect
        section.appendChild(clientSection);





    }

}