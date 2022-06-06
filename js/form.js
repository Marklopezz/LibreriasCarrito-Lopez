let formulario = document.getElementById('formulario');

function showUsers(nombre, edad, email) {
    console.log(nombre);
    console.log(edad);
    console.log(email);
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let data = new FormData(formulario)

    //console.log(data);
    let nombre = data.get('nombre');
    let edad = data.get('edad');
    let email = data.get('email');

    if (nombre === '' || edad === '' || email === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos :)',
            showConfirmButton: false,
            timer: 1000
        })
    } else {
        showUsers(nombre, edad, email)
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                tittle: "Datos de Formulario",
                body: `nombre: ${nombre} edad: ${edad} email: ${email}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

});