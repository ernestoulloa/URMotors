var usuarios = JSON.parse(localStorage.getItem('usuarios'));
if (!usuarios) {
    usuarios = [];
}

function registrar() {
    var nombre = document.getElementById('fname').value;
    var apellido = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('phone').value;
    var contrasena = document.getElementById('pass').value;
    var usuario = new Usuario(nombre, apellido, email, telefono, contrasena);
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    document.getElementById('emailPlaceholder').innerText = usuario.email;
    $('#staticBackdrop').modal('show');
}



