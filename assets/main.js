// contenedor de productos recomendados
const productsRecomendation = document.querySelector(".products__recomendation--container")
// contenedor de productos por categoria
const productsCategory = document.querySelector('.product__category--container');
// contenedor de productos populares
const productsPopular = document.querySelector('.product__popular--container');
// carrito
const cartMenu = document.querySelector('.cart');
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
        <div class="item-product">
            <img src="${cardImg}" alt="">
            <div class="product_cart--description">
                <h2 class="title-card--cart">${name}</h2>
                <p class="description-card--cart">${description}</p>
                <span class="price"><span class="spacing-price">$</span>${price}</span>
            </div>
        </div>
        <button class="add-btn" 
        data-id='${id}' 
        data-name='${name}' 
        data-description='${description}'
        data-price='${price} 
        'data-img='${cardImg}'>Agregar</button>
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
            data-description="${description}"
            data-img="${cardImg}"
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
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector('.total');
const subTotal = document.querySelector('.sub')
const buyBtn = document.querySelector('.btn-buy');
const overlay = document.querySelector('.overlay');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

const completeBuy = () => {
    if (!cart.length) return;
    if (window.confirm('??Desea finalizar su compra?')) {
        localStorage.removeItem('cart');
        window.location.reload();
    }
};

const showCart = () => {
    cartImg.addEventListener('click', () =>{
        cartMenu.classList.toggle("hide");
        overlay.classList.toggle('show-overlay')
    })
    exitImg.addEventListener('click', ()=>{
        cartMenu.classList.toggle("hide");
        overlay.classList.remove('show-overlay')
    })
    
}

const renderCartProduct = cartProduct =>{
    const{ id, name, price, description, cardImg, quantity} =  cartProduct;
    return`
        <div class="product_cart">
            <div class="item-product">
                <img src="${cardImg}" alt="">
                <div class="product_cart--description">
                    <h2 class="title-card--cart">${name}</h2>
                    <p class="description-card--cart">${description}</p>
                    <span class="price"><span class="spacing-price">$</span>${price}</span>
                </div>
            </div>
            <div class="item-handler">
                <span class="quantity-handler down" data-id=${id}>-</span>
                <span class="item-quantity">${quantity}</span>
                <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
        </div> 
    `

}

const renderCart = (cartList) => {
    if(!cartList.length){
        productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito</p>`;
        return;
    } 
    productsCart.innerHTML = cartList.map(renderCartProduct).join("");
}

// Suma de productos--------------------------------------------------------------------------------*
const showTotal = cartList =>{
    total.innerHTML = `$ ${cartList.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    }`;
}
const showSub = cartList =>{
    subTotal.innerHTML = `$ ${cartList.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    }`;
}
const disableBuyBtn = () =>{
    if (!cart.length) {
        buyBtn.classList.add('disabled')
    } else{
        buyBtn.classList.remove('disabled')
    }
}
// ! funcion de suma-------------------------------------!
 const handleQuantity = e =>{
    // ! funcion down
     if (e.target.classList.contains('down')) {
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);
        if(existingCartItem.quantity === 1){
            if(window.confirm('?? Desea eliminar el producto seleccionado ?')){
                cart = cart.filter(prod => prod.id !== existingCartItem.id);
                saveLocalStorage(cart);
                renderCart(cart);
                showSub(cart);
                showTotal(cart);
                disableBuyBtn();
                return
            }
        }
        cart = cart.map((item) =>{
            return item.id === existingCartItem.id
            ? {... item, quantity: Number(item.quantity) - 1}
            : item;
        });
        // ! funcion up
     } else if (e.target.classList.contains('up')){
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);
        cart = cart.map((item) =>{
            return item.id === existingCartItem.id
            ? {... item, quantity: Number(item.quantity) + 1}
            : item;
        });
     }
        saveLocalStorage(cart);
        renderCart(cart);
        showSub(cart);
        showTotal(cart);
        disableBuyBtn();
 }
// !------------------------------------------------------------!
// ---------------------------------------------------------------------------------------------------*


const addProduct = (e) => {
    if(!e.target.classList.contains('add-btn')) return;
    const product = {
        id : e.target.dataset.id,
        name : e.target.dataset.name,
        description : e.target.dataset.description,
        price: e.target.dataset.price,
        cardImg: e.target.dataset.img,
    };
    // Variabl contadora para productos repetidos en el carrito

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
    showSub(cart);
    showTotal(cart);
    disableBuyBtn();
}

// Menu ------------------------------------------------------------------------------


const init = () =>{
    document.addEventListener('DOMContentLoaded', renderCategory);
    document.addEventListener('DOMContentLoaded', showTotal(cart));
    document.addEventListener('DOMContentLoaded', showSub(cart));
    document.addEventListener('DOMContentLoaded', renderCart(cart));
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsRecomendation,3,renderProductRecomendation));
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsPopular,8,renderCard));
    categorieCard.addEventListener('click', filterProducts)
    productsCart.addEventListener('click', handleQuantity);
    productsCategory.addEventListener('click', addProduct);
    productsRecomendation.addEventListener('click',addProduct)
    productsPopular.addEventListener('click',addProduct)
    disableBuyBtn();
    showCart();
    buyBtn.addEventListener('click', completeBuy);
    // menuBars.addEventListener('click', toggleMenu);
};
init();

