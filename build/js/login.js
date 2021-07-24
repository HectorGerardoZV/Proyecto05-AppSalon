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
                window.location.href = 'index.html';
            } else {
                console.log("No");
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