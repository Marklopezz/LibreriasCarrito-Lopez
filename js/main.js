//Marcos Lopez


// Variables
let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');
let $botonComprar = document.querySelector('#boton-comprar');

window.onload = function() {
    fetch("./js/datos.json")
        .then(res => res.json())
        .then(data => {
            renderItems(data);
        })
}

// Funciones
function renderItems(baseDeDatos) {
    for (let info of baseDeDatos) {
        // Estructura
        let miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-3', 'mt-3', 'ml-5');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info['nombre'];
        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        // Precio
        let miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = '$' + info['precio'];
        // Boton 
        let miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-secondary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', () => anyadirCarrito(baseDeDatos, miNodoBoton));
        // Insertamos
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        $items.appendChild(miNodo);
    }
}

function anyadirCarrito(baseDeDatos, miNodoBoton) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(miNodoBoton.getAttribute('marcador'))
        // Calculo el total
    calcularTotal(baseDeDatos);
    // Renderizamos el carrito 
    renderizarCarrito(baseDeDatos);
    Toastify({
        text: "Se añadió un producto al carrito",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, #5A78A0 , #E0828C)",
        },
        onClick: function() {}
    }).showToast();

}


function renderizarCarrito(baseDeDatos) {
    // Vaciamos todo el html
    $carrito.textContent = '';
    // Quitamos los duplicados
    let carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach(function(item, indice) {
        // Obtenemos el item que necesitamos de la variable base de datos
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function(total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - $${miItem[0]['precio']}`;
        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-secondary', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        $carrito.appendChild(miNodo);
    })
}

function borrarItemCarrito(baseDeDatos) {
    //console.log()
    // Obtenemos el producto ID que hay en el boton pulsado
    let id = this.getAttribute('item');
    // Borramos todos los productos
    carrito = carrito.filter(function(carritoId) {
        return carritoId !== id;
    });
    // Volvemos a renderizar
    renderizarCarrito(baseDeDatos);
    // Calculamos de nuevo el precio
    calcularTotal(baseDeDatos);
    Toastify({
        text: "Se elimino un producto del carrito",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, #5A78A0 , #E0828C )",
        },
        onClick: function() {}
    }).showToast();
}

function calcularTotal(baseDeDatos) {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    for (let item of carrito) {
        // De cada elemento obtenemos su precio?
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    // Formateamos el total para que solo tenga dos decimales
    let totalDosDecimales = total.toFixed(2);
    // Renderizamos el precio en el HTML
    $total.textContent = totalDosDecimales;
}

function vaciarCarrito(baseDeDatos) {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito(baseDeDatos);
    calcularTotal(baseDeDatos);
}




function comprarCarrito(baseDeDatos) {
    vaciarCarrito(baseDeDatos);
    swal.fire("Gracias por su compra!", "En un plazo de 48 horas recibirá su pedido :)", "success");
}

// Botón Vaciar Carrito
$botonVaciar.addEventListener('click', vaciarCarrito);
// Botón Comprar items carrito
$botonComprar.addEventListener('click', comprarCarrito)