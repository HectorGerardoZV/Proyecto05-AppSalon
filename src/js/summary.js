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
        console.log(2);
    }

}