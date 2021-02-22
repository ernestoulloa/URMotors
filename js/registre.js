let usuarios = JSON.parse(localStorage.getItem('usuarios'));
if (!usuarios) {
    usuarios = [];
}

function registrar() {
    const nombre = document.getElementById('fname').value;      // todo cambiar a jquery
    const apellido = document.getElementById('lname').value;    // todo cambiar a jquery
    const email = document.getElementById('email').value;       // todo cambiar a jquery
    const telefono = document.getElementById('phone').value;    // todo cambiar a jquery
    const contrasena = document.getElementById('pass').value;   // todo cambiar a jquery
    const usuario = new Usuario(nombre, apellido, email, telefono, contrasena);
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    document.getElementById('emailPlaceholder').innerText = usuario.email; // todo cambiar a jquery
    $('#staticBackdrop').modal('show');
}



