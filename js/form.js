let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let data = new FormData(formulario)

    console.log(data)
    console.log(data.get('nombre'))
    console.log(data.get('edad'))
    console.log(data.get('email'))

    if (nombre === '' || edad === '' || email === '') {
        swal({
            icon: 'error',
            tittle: 'Oops...',
            text: 'Ingrese todos los campos requeridos :)',
            showConfirmButton: false,
            timer: 1000
        })
    } else {
        users.showUsers(nombre, edad, email)
    }

    fetch("/jasons/data.jason", {
            method: "POST",
            body: new FormData(e.currentTarget)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))


})