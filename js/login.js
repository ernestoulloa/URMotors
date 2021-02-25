function login() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (!usuarios) {
        usuarios = [];
    }
    const user = $('#username')[0].value; //document.getElementById('username').value;
    const pass = $('#password')[0].value; //document.getElementById('password').value;
    let found = undefined;
    for (var i = 0; i < usuarios.length; i++) {
        var usuarioDBD = usuarios[i];
        if (user === usuarioDBD.email && pass === usuarioDBD.contrasenna) {
            found = usuarioDBD;
            break;
        }
    }
    if (found) {
        $('#welcomeuser').text(`Bienvenido ${user}`)
        $('#staticBackdrop').modal('hide');
        $('#loginBtn').hide();
        $('.toast').toast('show');
        var loggedInUser = $('#loggedInUser');
        loggedInUser.text(` ${user}`);
        loggedInUser.removeClass('d-none');

        sessionStorage.setItem('usuariolog', JSON.stringify(found));
    } else {
        alert("Usuario o contraseña incorrectos. Por favor vuelva a intentar");
    }

}