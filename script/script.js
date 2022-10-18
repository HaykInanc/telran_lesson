// написать функцию, которая делать fetch запрос и выводит весь список продуктов 
// в консоль

const root = document.querySelector('#products');

function renderProductCards(product_list){
    product_list.forEach(product => {
        const product_card = getProductCard(product);
        root.append(product_card)
    })
}

function getAllProducts(){
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => renderProductCards(json))
}

getAllProducts()

function getProductCard(card_data){
    const {title, price, image} = card_data;

    const container = document.createElement('div');
    const img_elem = document.createElement('img');
    const header_elem = document.createElement('p');
    const price_elem = document.createElement('p');
    container.append(img_elem, header_elem, price_elem);

    container.classList.add('item');

    img_elem.src = image;
    header_elem.innerText = title;
    price_elem.innerText = price;

    return container
    
}


function getAllCategories(){
    fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(json => console.log(json))
}

getAllCategories();

// root.append(getProductCard(product))

// yнапишите функцию, которая используя getProductCard
// проходится по всем объектам массива с продуктами
// и для каждого формирует карточку в интерфейсе

// создать функцию, которая делает запрос на сервер и получает
// все категории
// их необходимо вывести в консоль