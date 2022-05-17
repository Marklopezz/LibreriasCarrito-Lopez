let btnEmpezar = document.getElementById('btnEmpezar');

function verificar(event) {
    //Previene que se reinicie el sitio al presionar Enviar
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;

    //Devuelve error si no se ingresa lo requerido
    if (nombre === '' || edad === '' || email === '') {
        swal.fire({
            type: 'error',
            tittle: 'Oops',
            text: 'Ingrese todos los campos requeridos :)',
            showConfirmButton: false,
            timer: 100
        })
    } else {
        users.showUsers(nombre, edad, email)
    }
}