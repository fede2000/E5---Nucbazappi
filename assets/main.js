// contenedor de productos recomendados
const productsRecomendation = document.querySelector(".products__recomendation--container")
// contenedor de productos por categoria
const productsCategory = document.querySelector('.product__category--container');
// contenedor de productos populares
const productsPopular = document.querySelector('.product__popular--container');
// carrito
const cart = document.querySelector('.cart');
// contenedor de 
const cardProduct = document.querySelector('.product-container_card');
const categorieCard =  document.querySelector('.category-container');
const listCategory = document.querySelectorAll('.card-categorie');

const loadBtn = document.querySelector('.load-btn');




const renderProductRecomendation = product => {
    // desestructuramos el objeto
    const{id, name, price, description, cardImg} = product;

    return `
    <div class="product_recomendation">
        <img src="${cardImg}">
        <div class="product_recomendation--description">
            <h2 class="title-card">${name}</h2>
            <p class="description-card">${description}</p>
            <span class="price"><span class="spacing-price">$</span>${price}</span>
        </div>
        <button class="add-btn" data-id='${id}' data-name='${name}' data-price='${price} 'data-img='${cardImg}'>Agregar</button>
    </div>
    `
}

// Funcion para mostrar productos aleatoriamente
const renderProductsRandom = (contenedor,cantidad,funcionRender) => {
    // creamos un array para los productos random a promocionar
    productsListRandom = [];
    // ciclo para obtener los numeros-id aleatorios necesarios
    for (var i = 0; i < cantidad; i++) {
        var idRandom = Math.floor(Math.random()*productsData.length)
        // si el idrandom es repetido , volver a calcular hasta que no sea repetido
        while(productsListRandom.includes(productsData[idRandom]) == true){
            idRandom = Math.floor(Math.random()*productsData.length)
        }
        // agregamos el producto al array de productos random a promocionar
        productsListRandom.push(productsData[idRandom])
    }
    // pintamos en el html
    contenedor.innerHTML = productsListRandom.map(funcionRender).join("")

}




// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// const saveLocalStorage = (cartList) => {
//     localStorage.setItem('cart', JSON.stringify(cartList))
// }

// ! Render-----------------------------------------------------------------------!
const renderCard = product => {
    const{ id, name, price, description, cardImg} =  product;
    
    return`
    <div class="cards">
        <img src="${cardImg}" alt="" class="img-card">
        <h2 class="title-card">${name}</h2>
        <p class="description-card">${description}</p>
        <div class="footer-card">
            <span class="price"><span class="spacing-price">$</span>${price}</span>
            <button class="add-btn"
            data-id="${id}"
            data-name="${name}"
            data-img=""
            data-price="${price}">Agregar</button>
        </div>
    </div>
    `
}
const renderCategory = (category) => {
    const listaProductos = productsData.filter(p => p.category === category);
    productsCategory.innerHTML = listaProductos.map(renderCard).join('');
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


// LOGICA PARA EL CARRO //

const cartImg = document.getElementById("cartImg");
const exitImg = document.getElementById("exit");
const cartContainer = document.getElementsByClassName(".cart-container")

const showCart = () => {
    cartImg.addEventListener('click', () =>{
        cart.classList.toggle("hide");
    })
    exitImg.addEventListener('click', ()=>{
        cart.classList.toggle("hide");
    })
}

const renderCartProduct = cartProduct =>{
    const{ id, name, price, description, cardImg} =  cartProduct;

    return`
        <div class="product_cart">
            <img src="${cardImg}" alt="">
            <div class="product_cart--description">
                <h2 class="title-card--cart">${name}</h2>
                <p class="description-card--cart">${description}</p>
                <span class="price"><span class="spacing-price">$</span>${price}</span>
            </div>
            <div class="item-handler">
                <span class="quantity-handler down" data-id=${id}>-</span>
                <span class="item-quantity">1</span>
                <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
        </div> 
    `

}

const renderCart = (cartList) => {
    if(!cartList.length == 0){
        productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito</p>`;
        return;
    } 
    productsCart.innerHTML = cartList.map(renderCartProduct).join;
}


const addProduct = (e) => {
    if(!e.target.classList.contains('add-btn')) return;
    const product = {
        id : e.target.dataset.id,
        name : e.target.dataset.name,
        price: e.target.dataset.price,
        img: e.target.dataset.img,
    };

    // Variable contadora para productos repetidos en el carrito

    const existingCartItem = cart.find(item => item.id === product.id);

    if(existingCartItem){
        cart = cart.map((item) => {
            return item.id === product.id
            ? { ... item, quantity: Number(item.quantity) + 1}
            : item;
        })
    } else {
        cart = [... cart, {... product, quantity : 1}];
    }

    saveLocalStorage(cart);
    renderCart(cart);
    //showTotal(cart);
    //disableBuyBtn();

}

const init = () =>{
    document.addEventListener('DOMContentLoaded', renderCategory);
    categorieCard.addEventListener('click', filterProducts)
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsRecomendation,3,renderProductRecomendation));
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsPopular,8,renderCard));
    productsCategory.addEventListener('click', addProduct);
    showCart();
};
init();

