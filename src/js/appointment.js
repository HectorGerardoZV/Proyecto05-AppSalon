function addAppointment() {
    addNameClient();
}


function addNameClient() {
    const name = document.querySelector("#name");
    name.addEventListener("input", e => {
        let nameValue = e.target.value;
        if (nameValue.length < 3) {
            const labelAlert = document.querySelector(".alert");
            if (labelAlert) {
                return;
            }

            const alert = document.createElement('DIV');
            alert.textContent = "The name is too short";
            alert.classList.add('alert');

            const appointment = document.querySelector(".section__appointment");
            appointment.appendChild(alert);

        } else {
            const labelAlert = document.querySelector(".alert");
            if (labelAlert) {
                labelAlert.remove();
            }
        }
    });
}