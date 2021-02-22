function login() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (!usuarios) {
        usuarios = [];
    }
    const user = document.getElementById('username').value; // todo cambiar a jquery
    const pass = document.getElementById('password').value; // todo cambiar a jquery
    let found = undefined;
    for (var i = 0; i < usuarios.length; i++) {
        var usuarioDBD = usuarios[i];
        if (user === usuarioDBD.email && pass === usuarioDBD.contrasenna) {
            found = usuarioDBD;
            break;
        }
    }
    if (found) {
        alert(`Bienvenido a URMotors ${user}`);
        $('#staticBackdrop').modal('hide');
        $('#loginBtn').hide();
        var loggedInUser = $('#loggedInUser');
        loggedInUser.text(` ${user}`);
        loggedInUser.removeClass('d-none');

        sessionStorage.setItem('usuariolog', JSON.stringify(found));
    } else {
        alert("Usuario o contraseña incorrectos. Por favor vuelva a intentar");
    }

}