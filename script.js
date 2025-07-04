
let products = JSON.parse(localStorage.getItem('products')) || [
    { name: 'Base Líquida', price: 120, image: 'https://via.placeholder.com/200x150' },
    { name: 'Labial Matte', price: 50, image: 'https://via.placeholder.com/200x150' }
];
let carrito = [];
const password = 'fabiola123';

// (Resto del JS: funciones para login, gestión, carrito, etc. El usuario ya las tenía)
