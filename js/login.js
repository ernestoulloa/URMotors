function login() {
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (!usuarios) {
        usuarios = [];
    }
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var valid = false;
    for (var i = 0; i < usuarios.length; i++) {
        var usuarioDBD = usuarios[i];
        if (user === usuarioDBD.email && pass === usuarioDBD.contrasenna) {
            valid = true;
            break;
        }
    }
    if (valid) {
        alert(`Bienvenido a URMotors ${user}`);
        $('#staticBackdrop').modal('hide');
        $('#loginBtn').hide();
        var loggedInUser = $('#loggedInUser');
        loggedInUser.text(` ${user}`);
        loggedInUser.removeClass('d-none');
    } else {
        alert("Usuario o contraseña incorrectos. Por favor vuelva a intentar");
    }
}