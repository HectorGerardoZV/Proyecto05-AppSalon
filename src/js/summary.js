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


        const existSectionClient = document.querySelector(".client__section");
        const existTitleClient = document.querySelector(".title-section");
        if (existSectionClient) {
            existSectionClient.remove();
            existTitleClient.remove();

        }
        const existSectionServices = document.querySelector(".services__section");
        const existTitleServices = document.querySelector(".title-section");
        if (existSectionServices) {
            existSectionServices.remove();
            existTitleServices.remove();
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


}