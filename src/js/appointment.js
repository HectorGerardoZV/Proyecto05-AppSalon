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