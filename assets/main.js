// contenedor de productos recomendados
const productsRecomendation = document.querySelector(".products_recomendation--container")




const renderProductRecomendation = product => {
    // desestructuramos el objeto
    const{id, name, price, description, cardImg} = product;
    return `
    <div class="product_recomendation">
        <img src="${cardImg}">
        <div class="product_recomendation--description">
            <h2>${name}</h2>
            <p>${description}</p>
            <span class="price">$${price}</span>
        </div>
        <button data-id='${id}' data-name='${name}' data-price='${price} 'data-img='${cardImg}'>Agregar</button>
    </div>
    `
}

// Funcion para recomendar productos aleatoriamente
const renderProductsRandom = () => {
    // creamos un array para los productos random a promocionar
    productsListRandom = [];
    // ciclo para obtener los numeros-id aleatorios necesarios
    for (var i = 0; i < 3; i++) {
        var idRandom = Math.floor(Math.random()*productsData.length)
        // si el idrandom es repetido , volver a calcular hasta que no sea repetido
        while(productsListRandom.includes(productsData[idRandom]) == true){
            idRandom = Math.floor(Math.random()*productsData.length)
        }
        // agregamos el producto al array de productos random a promocionar
        productsListRandom.push(productsData[idRandom])
    }
    // pintamos en el html
    productsRecomendation.innerHTML = productsListRandom.map(renderProductRecomendation).join("")

}

const cart = document.querySelector('.cart');
const cardProduct = document.querySelector('.product-container_card');
const categorieCard =  document.querySelector('.category-container');
const listCategory = document.querySelectorAll('.card-categorie');
const productos = document.querySelector('.product-container');
const loadBtn = document.querySelector('.load-btn');


// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// const saveLocalStorage = (cartList) => {
//     localStorage.setItem('cart', JSON.stringify(cartList))
// }

// ! Render-----------------------------------------------------------------------!
const renderCard = product => {
    const{ id, name, price, description, cardImg} =  product;
    return`
    <div class="product_recomendation">
        <img src="${cardImg}">
        <div class="product_recomendation--description">
            <h2>${name}</h2>
            <p>${description}</p>
            <span class="price">$${price}</span>
        </div>
        <button data-id='${id}' data-name='${name}' data-price='${price} 'data-img='${cardImg}'>Agregar</button>
    </div>
    `
}
const renderCategory = (category, index) => {
    const listaProductos = productsData.filter(p => p.category === category);
    productos.innerHTML = listaProductos.map(renderCard).join('');
};

// * Filtro categoria-------------------------------------------------------------------*
 const changeFilter = e =>{
    const selectedCat = e.target.dataset.category;
    console.log(selectedCat)
    const categorias = [... listCategory];
    categorias.forEach((category) => {
        if (category.dataset.category !== selectedCat) {
            category.classList.remove('active')
        } else{
            category.classList.add('active')
        }
    });
    // if (selectedCat !== 'pizza') {
    //     loadBtn.classList.add('hidden')
    // } else{
    //     loadBtn.classList.remove('hidden')
    // }
 }

const filterProducts = (e) =>{
    if(!e.target.classList.contains('category')) return;
    changeFilter(e);
    renderCategory(e.target.dataset.category,0)
    // if (e.target.dataset.category.toLowerCase() === 'pizza') {
    //     productos.innerHTML = '';
    //     renderCategory('pizza', 0)
    // } else{
    //     renderCategory(e.target.dataset.category,0)
    // }
};

const init = () =>{
    document.addEventListener('DOMContentLoaded', renderCategory);
    categorieCard.addEventListener('click', filterProducts)
    document.addEventListener('DOMContentLoaded', renderProductsRandom());
};
init();

