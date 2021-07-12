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