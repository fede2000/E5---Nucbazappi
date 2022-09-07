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

const init = () => {
    document.addEventListener('DOMContentLoaded', renderProductsRandom());
  };
  
  init();
  
