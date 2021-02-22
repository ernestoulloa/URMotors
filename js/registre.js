let usuarios = JSON.parse(localStorage.getItem('usuarios'));
if (!usuarios) {
    usuarios = [];
}

function registrar() {
    const nombre = document.getElementById('fname').value;
    const apellido = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const contrasena = document.getElementById('pass').value;
    const usuario = new Usuario(nombre, apellido, email, telefono, contrasena);
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    document.getElementById('emailPlaceholder').innerText = usuario.email;
    $('#staticBackdrop').modal('show');
}



