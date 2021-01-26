function login(user, pass) {
    if (user === "admin" && pass === "admin") {
        alert("Bienvenido, a URMotors");
    } else {
        alert("Usuario o contraseña incorrectos. Por favor vuelva a intentar");
        showPrompt();
    }
}

function showPrompt() {
    var user = prompt("Ingrese su usuario");
    var pass = prompt("Ingrese su contraseña");
    login(user, pass);
}