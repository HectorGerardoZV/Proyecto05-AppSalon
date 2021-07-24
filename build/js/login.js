document.addEventListener("DOMContentLoaded", () => {
    logIn();
});

function logIn() {
    const btnLogIn = document.querySelector("#btn-login");

    btnLogIn.addEventListener("click", (e) => {
        e.preventDefault();
        const userName = document.querySelector("#userNameInput").value;
        const password = document.querySelector("#passwordInput").value;
        const data = require();
        data.then(result => {
            if (userName === result.userName && password == result.password) {
                const log = document.querySelector(".login");
                const error = document.createElement("DIV");
                error.classList.add("acepted-login");
                error.textContent = "Good";
                log.appendChild(error);
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000)
            } else {
                const error_exist = document.querySelector(".error-login");
                if (!error_exist) {
                    const log = document.querySelector(".login");
                    const error = document.createElement("DIV");
                    error.classList.add("error-login");
                    error.textContent = "Error with user or password";
                    log.appendChild(error);
                    setTimeout(() => {
                        error.remove();
                    }, 3000)
                }



            }
        })
    });

}


async function require() {
    try {
        const url = "http://localhost:3000/login.php";
        const require = await fetch(url);
        const data = await require.json();
        return data;
    } catch (error) {
        console.log(erro);
    }
}