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
        const url = "http://localhost:3000/services.php";
        const result = await fetch(url);
        const data = await result.json();

        data.forEach(value => {
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

    const servicesButton = document.querySelector("#services");
    const appointmentButton = document.querySelector("#appointment");
    const summaryButton = document.querySelector("#summary");

    if (newSection == 1) {
        section = 1;
        servicesSection.classList.remove("hide-section");
        apointmentSection.classList.add("hide-section");
        summarySection.classList.add("hide-section");

        servicesButton.classList.add("select-section");
        appointmentButton.classList.remove("select-section");
        summaryButton.classList.remove("select-section");
    }
    if (newSection == 2) {
        section = 2;
        servicesSection.classList.add("hide-section");
        apointmentSection.classList.remove("hide-section");
        summarySection.classList.add("hide-section");

        servicesButton.classList.remove("select-section");
        appointmentButton.classList.add("select-section");
        summaryButton.classList.remove("select-section");
    }
    if (newSection == 3) {
        section = 3;
        servicesSection.classList.add("hide-section");
        apointmentSection.classList.add("hide-section");
        summarySection.classList.remove("hide-section");

        servicesButton.classList.remove("select-section");
        appointmentButton.classList.remove("select-section");
        summaryButton.classList.add("select-section");
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

    package.client = client.value;
    package.date = date.value;
    package.time = time.value;
    const section = document.querySelector(".section__summary");

    if (client.value.length < 3 || date.value == 0 ||
        time.value == 0 || services.length == 0) {
        const exist = document.querySelector(".message");

        if (exist) {
            exist.remove();
        }

        const message = document.createElement("DIV");
        message.textContent = "Please chose or select the inputs";
        message.classList.add("message");
        section.appendChild(message);

        //Deleting the section client
        const existSectionClient = document.querySelector(".client__section");
        const existTitleClient = document.querySelector(".title-section");
        if (existSectionClient) {
            existSectionClient.remove();
            existTitleClient.remove();

        }
        //Deleting the section services
        const existSectionServices = document.querySelector(".services__section");
        const existTitleServices = document.querySelector(".title-section");
        if (existSectionServices) {
            existSectionServices.remove();
            existTitleServices.remove();
        }

        //Deleting the labels total
        const existTotalLabel = document.querySelector(".total-label");
        const existTotalContent = document.querySelector(".total-content");
        if (existTotalLabel) {
            existTotalLabel.remove();
            existTotalContent.remove();
        }

    } else {
        const exist = document.querySelector(".message");
        if (exist) {
            exist.remove();
        }
        addSectionClient();
        addSectionServices();

    }

}

function addSectionClient() {
    const section = document.querySelector(".section__summary");

    const clientLabel = document.createElement("H3");
    clientLabel.classList.add("title-section");
    clientLabel.textContent = "Client";

    const clientSection = document.createElement("DIV");
    clientSection.classList.add("client__section");

    const exist = document.querySelector(".client__section");
    const existTitle = document.querySelector(".title-section");
    if (exist) {
        exist.remove();
        existTitle.remove();
    }
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
    const clientNameDiv = document.createElement("DIV");
    clientNameDiv.classList.add("client__content");
    clientNameDiv.appendChild(clientNameLabel);
    clientNameDiv.appendChild(clientNameContent);
    //Date
    const clientDateDiv = document.createElement("DIV");
    clientDateDiv.classList.add("client__content");
    clientDateDiv.appendChild(clientDateLabel);
    clientDateDiv.appendChild(clientDateContent);
    //Hour
    const clientTimeDiv = document.createElement("DIV");
    clientTimeDiv.classList.add("client__content");
    clientTimeDiv.appendChild(clientTimeLabel);
    clientTimeDiv.appendChild(clientTimeContent);
    //Div client
    clientSection.appendChild(clientNameDiv);
    clientSection.appendChild(clientDateDiv);
    clientSection.appendChild(clientTimeDiv);
    //Inyect
    section.appendChild(clientLabel);
    section.appendChild(clientSection);
}

function addSectionServices() {
    const section = document.querySelector(".section__summary");

    const servicesLabel = document.createElement("H3");
    servicesLabel.classList.add("title-section");
    servicesLabel.textContent = "Services";

    const servicesSection = document.createElement("DIV");
    servicesSection.classList.add("services__section");


    const exist = document.querySelector(".services__section");
    const existTitle = document.querySelector(".title-section");
    if (exist) {
        exist.remove();
        existTitle.remove();

    }
    const { services } = package;

    services.forEach(service => {
        const contentServices = document.createElement("DIV");
        contentServices.classList.add("contentServices");
        //Service
        const nameServiceDiv = document.createElement("DIV");
        nameServiceDiv.classList.add("nameService__content");
        const nameServiceLabel = document.createElement("P");
        nameServiceLabel.textContent = "Service:";
        const nameServiceContent = document.createElement("P");
        nameServiceContent.textContent = service.nombre;
        nameServiceDiv.appendChild(nameServiceLabel);
        nameServiceDiv.appendChild(nameServiceContent);
        //Cost
        const costServiceDiv = document.createElement("DIV");
        costServiceDiv.classList.add("costService__content");
        const costServiceLabel = document.createElement("P");
        costServiceLabel.textContent = "Cost:";
        const costServiceContent = document.createElement("P");
        costServiceContent.textContent = service.precio;
        costServiceDiv.appendChild(costServiceLabel);
        costServiceDiv.appendChild(costServiceContent);
        //Inyection
        contentServices.appendChild(nameServiceDiv);
        contentServices.appendChild(costServiceDiv);

        servicesSection.appendChild(contentServices);

    });
    section.appendChild(servicesLabel);
    section.appendChild(servicesSection);
    addTotal();


}

function addTotal() {
    const { services } = package;
    let total = 0;
    services.forEach(service => {
        const aux = service.precio.split(" ");
        total += parseInt(aux[1]);
    });

    const servicesSection = document.querySelector(".section__summary");
    const totalLabel = document.createElement("H3");
    totalLabel.classList.add("total-label");
    totalLabel.textContent = "Total";
    const totalContent = document.createElement("P");
    totalContent.classList.add("total-content");
    totalContent.textContent = `$ ${total}`;
    const existTotalLabel = document.querySelector(".total-label");
    const existTotalContent = document.querySelector(".total-content");
    if (existTotalLabel) {
        existTotalLabel.remove();
        existTotalContent.remove();
    }
    servicesSection.appendChild(totalLabel);
    servicesSection.appendChild(totalContent);
}