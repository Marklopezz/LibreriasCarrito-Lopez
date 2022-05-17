let baseDeDatos = [{ "id": 1, "nombre": "Gorro Mont Blanc", "precio": 1990, "imagen": "img/Gorro-Mont-Blanc.jpeg" },
    { "id": 2, "nombre": "Hoodie Basic", "precio": 5660, "imagen": "img/Hoodie-Basic.jpg" },
    { "id": 3, "nombre": "Jogging Reflex Black", "precio": 3500, "imagen": "img/Jogging-Reflex-Black.jpg" },
    { "id": 4, "nombre": "Remera Estampada NASA", "precio": 1000, "imagen": "img/remera-estampada-NASA.jpg" },
    { "id": 5, "nombre": "Buzo Thrasher Blanco", "precio": 5000, "imagen": "img/buzo-blanco-thrasher.jpg" },
    { "id": 6, "nombre": "Camisa Leñador", "precio": 2000, "imagen": "img/camisa-leñador-roja.jpg" },
    { "id": 7, "nombre": "Parka Hunter Camel", "precio": 8800, "imagen": "img/Parka-Hunter-Camel.jpg" },
    { "id": 8, "nombre": "Campera American Blue", "precio": 6990, "imagen": "img/Campera-American-Blue.jpg" },
    { "id": 9, "nombre": "Pulsera Energy", "precio": 700, "imagen": "img/Pulsera-Energy.jpg" },
    { "id": 10, "nombre": "Short Army", "precio": 1200, "imagen": "img/Short-Army.jpg" },
    { "id": 11, "nombre": "Polera Dexter Marrón", "precio": 4000, "imagen": "img/Polera-Dexter-Marron.jpg" },
    { "id": 12, "nombre": "Sweater de hilo Gris", "precio": 5000, "imagen": "img/Sweater-de-hilo-Gris.jpg" }
];

//Desestructuración
let [, a,b,c] = baseDeDatos;


console.log(a)
console.log(b)
console.log(c)

//Spread

let preciosInd = [1990, 5560, 3500, 1000, 5000, 2000, 8800, 6990, 700, 1200, 4000, 5000]

    console.log(Math.max(...preciosInd))