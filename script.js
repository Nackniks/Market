// Список доступных товаров
const products = [
    { id: 1, name: "Товар 1", price: 100 },
    { id: 2, name: "Товар 2", price: 200 },
    { id: 3, name: "Товар 3", price: 300 },
    { id: 4, name: "Товар 4", price: 150 },
    { id: 5, name: "Товар 5", price: 250 },
    { id: 6, name: "Товар 6", price: 350 }
];

// Массив для хранения товаров в корзине
let cart = [];

// Функция для отображения списка товаров
function renderProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = ''; // Очищаем список перед рендером

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productsList.appendChild(productElement);
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Функция для отображения содержимого корзины
function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Очищаем корзину перед рендером

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Ваша корзина пуста</p>';
        return;
    }

    let totalPrice = 0;
    cart.forEach(product => {
        totalPrice += product.price;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - ${product.price} руб.</p>
        `;
        cartElement.appendChild(cartItem);
    });

    const totalElement = document.createElement('p');
    totalElement.innerHTML = `Итого: ${totalPrice} руб.`;
    cartElement.appendChild(totalElement);
}

// Функция для оформления покупки
function checkout() {
    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    alert(`Спасибо за покупку! Общая сумма: ${totalPrice} руб.`);

    // Очистка корзины после оформления покупки
    cart = [];
    renderCart();
}

// Инициализация страницы
renderProducts();
