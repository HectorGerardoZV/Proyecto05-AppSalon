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
        addSectionClient();
        addSectionServices();

    }

}

function addSectionClient() {
    const section = document.querySelector(".section__summary");

    const clientLabel = document.createElement("H3");
    clientLabel.textContent = "Client";

    const clientSection = document.createElement("DIV");
    clientSection.classList.add("client__section");
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
    servicesLabel.textContent = "Services";
    const servicesSection = document.createElement("DIV");


    const { services } = package;

    services.forEach(service => {
        const clientContent = document.createElement("DIV");
        clientContent.classList.add("services__section");
        //Service
        const nameServiceLabel = document.createElement("P");
        nameServiceLabel.textContent = "Service:";
        const nameServiceContent = document.createElement("P");
        nameServiceContent.textContent = service.nombre;
        //Cost
        const costServiceLabel = document.createElement("P");
        costServiceLabel.textContent = "Cost:";
        const costServiceContent = document.createElement("P");
        costServiceContent.textContent = service.precio;



        clientContent.appendChild(nameServiceLabel);
        clientContent.appendChild(nameServiceContent);
        clientContent.appendChild(costServiceLabel);
        clientContent.appendChild(costServiceContent);


        servicesSection.appendChild(clientContent);

    });

    section.appendChild(servicesSection);


}