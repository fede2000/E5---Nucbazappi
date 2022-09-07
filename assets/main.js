// Elementos
const cart = document.querySelector('.cart');
const cardProduct = document.querySelector('.product-container_card');
const categorieCard =  document.querySelector('.category-card');
const listCategory = document.querySelectorAll('.category');
const productos = document.querySelector('.product__container');
const loadBtn = document.querySelector('.load-btn');


// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// const saveLocalStorage = (cartList) => {
//     localStorage.setItem('cart', JSON.stringify(cartList))
// }

// ! Render-----------------------------------------------------------------------!
const renderCard = product => {
    const{ id, name, price, description, cardImg} =  product;
    return`
    <div class="container-card">
    <div class="cards">
        <img src="${cardImg}" alt="" class="img-card">
        <h1 class="titulo-card1">${name}</h1>
        <p class="titulo-cardp">${description}</p>
        <span class="price">$${price}</span>
        <button class="add-btn"
        data-id="${id}"
        data-name="${name}"
        data-img="${cardImg}"
        data-price="${price}">Agregar</button>
    </div>
</div>
    `
}
const renderCategory = (category, index) => {
    if (category === 'pizza') {
        productos.innerHTML += allProducts.productList[index].map(renderCard).join('')
        return;
    }
    const listaProductos = productsData.filter(p => p.category === category);
    productos.innerHTML = listaProductos.map(renderCard).join('');
};

// * Filtro categoria-------------------------------------------------------------------*
 const changeFilter = e =>{
    const selectedCat = e.target.dataset.category;
    const categorias = [... listCategory];
    categorias.forEach((category) => {
        if (category.dataset.category !== selectedCat) {
            category.classList.remove('active')
        } else{
            category.classList.add('active')
        }
    });
    if (selectedCat !== 'pizza') {
        loadBtn.classList.add('hidden')
    } else{
        loadBtn.classList.remove('hidden')
    }
 }

const filterProducts = (e) =>{
    if(!e.target.classList.contains('category')) return;
    changeFilter(e);
    if (e.target.dataset.category.toLowerCase() === 'pizza') {
        productos.innerHTML = '';
        renderCard('pizza', 0)
    } else{
        renderCard(e.target.dataset.category)
    }
};

const init = () =>{
    document.addEventListener('DOMContentLoaded', renderCard('pizza', 0));
    categorieCard.addEventListener('click', filterProducts)
};
init();