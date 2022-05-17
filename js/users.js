// Objeto Usuario
class Users {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.email = email;
    }
}
//Array para guardar los datos en conjuntos
let arrayUser = [];

//Llamada al id del Boton
let btnEnviar = document.getElementById("btnEnviar");

//Agrego un evento, que tome los valores del input
btnEnviar.addEventListener("click", function() {
    //variables con sus valores
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let email = document.getElementById("email").value;

    //Envio al Array los datos ingresados
    arrayUser.push(new Users(nombre, edad, email));
    //console.log(arrayUser);

    //LocalStorage
    localStorage.setItem("Datos del Usuario", JSON.stringify(arrayUser))
});
