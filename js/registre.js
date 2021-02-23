let usuarios = JSON.parse(localStorage.getItem('usuarios'));
if (!usuarios) {
    usuarios = [];
}

function registrar() {
    const nombre = $('#fname').val();       //document.getElementById('fname').value;
    const apellido = $('#lname').val();     //document.getElementById('lname').value;
    const email = $('#email').val();        //document.getElementById('email').value;
    const telefono = $('#phone').val();     //document.getElementById('phone').value;
    const contrasena = $('#pass').val();    //document.getElementById('pass').value;
    const usuario = new Usuario(nombre, apellido, email, telefono, contrasena);
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    $('#emailPlaceholder').text(usuario.email); // document.getElementById('emailPlaceholder').innerText = usuario.email;
    $('#staticBackdrop').modal('show');
}



