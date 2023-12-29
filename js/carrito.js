const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arrays de Productos
let allProducts = [];

let productos = [
    {
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/406910-1000-1000?v=638143119887470000&width=1000&height=1000&aspect=true",
        nombre: "Zapatilla Nike",
        precioOriginal: "$185.999",
        precioDescuento: "$136.999",
        idBoton: "botonCarrito"
    },
    {
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/317596-1000-1000?v=638128485314300000&width=1000&height=1000&aspect=true",
        nombre: "Zapatilla Nike",
        precioOriginal: "$149.999",
        precioDescuento: "$117.999",
        idBoton: "botonCarritoDos"
    },
    {
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/699301-1000-1000?v=638229666888870000&width=1000&height=1000&aspect=true",
        nombre: "Zapatilla Nike",
        precioOriginal: "$210.000",
        precioDescuento: "$184.499",
        idBoton: "botonCarritoTres"
    }
];


const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: parseFloat(product.querySelector('p').textContent.slice(1)), // Aquí se convierte el precio a un número
        };


        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// Funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total = total + product.quantity * product.price;
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total.toFixed(3)}`;
    countProducts.innerText = totalOfProducts;
};






// LocalStorage
const saveToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(allProducts));
};

// Recuperar los productos de localStorage al cargar la página
const loadFromLocalStorage = () => {
    const savedProducts = localStorage.getItem('cart');
    if (savedProducts) {
        allProducts = JSON.parse(savedProducts);
        showHTML();
    }
};

// Llamar a loadFromLocalStorage al inicio
loadFromLocalStorage();

// Llamar a saveToLocalStorage después de cada cambio en allProducts
productsList.addEventListener('click', e => {
    saveToLocalStorage();
});

//LocalStorage
rowProduct.addEventListener('click', e => {
    saveToLocalStorage();
});







//Sweet Alert2
document.addEventListener('DOMContentLoaded', (event) => {
    const BOTON_CARRITO = document.getElementById("botonCarrito");

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    BOTON_CARRITO.addEventListener('click', () => {
        

        Toast.fire({
            icon: "success",
            title: "Producto agregado al carrito exitosamente"
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const BOTON_CARRITO = document.getElementById("botonCarritoDos");

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    BOTON_CARRITO.addEventListener('click', () => {
        

        Toast.fire({
            icon: "success",
            title: "Producto agregado al carrito exitosamente"
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const BOTON_CARRITO = document.getElementById("botonCarritoTres");

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    BOTON_CARRITO.addEventListener('click', () => {
        

        Toast.fire({
            icon: "success",
            title: "Producto agregado al carrito exitosamente"
        });
    });
});


// MODO OSCURO - MODO CLARO
const modoOscuro = document.getElementById ("modoOscuro");

modoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "claro")
    }

})



//COTIZADOR
const criptoYa = "https://criptoya.com/api/dolar";
const divDolar = document.getElementById("divDolar");

let index = 0;

setInterval(() => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({ blue, ccl, mep, oficial, solidario, qatar }) => {
           
            const dolarTypes = [
                { name: "Dolar oficial", value: oficial },
                { name: "Dolar Solidario", value: solidario },
                { name: "Dolar MEP", value: mep },
                { name: "Dolar CCL", value: ccl },
                { name: "Dolar Blue", value: blue },
                { name: "Dolar Qatar", value: qatar }
            ];

            divDolar.innerHTML = `
                <h2>Tipos de dolar:</h2>
                <p>${dolarTypes[index].name}: ${dolarTypes[index].value}</p>
            `;

            
            index = (index + 1) % dolarTypes.length;
        })
        .catch(error => console.log(error));
}, 4000); 