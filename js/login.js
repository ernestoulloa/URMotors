function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (user === "admin" && pass === "admin") {
        alert(`Bienvenido a URMotors ${user}`);
        $('#staticBackdrop').modal('hide');
        $('#loginBtn').hide();
        var loggedInUser = $('#loggedInUser');
        loggedInUser.text(`${user}`);
        loggedInUser.removeClass('d-none');
    } else {
        alert("Usuario o contraseña incorrectos. Por favor vuelva a intentar");
    }
}