const productsData = [
    {
      id: 1,
      name: 'La Mr. pit',
      price: 350,
      description: 'Solo para expertos',
      category: 'pizza',
      cardImg: './assets/img/pizza-1.png',
    },
    {
      id: 2,
      name: "¡Q'Jamone",
      price: 350,
      description: 'C/jamón crudo',
      category: 'pizza',
      cardImg: './assets/img/pizza-2.png',
    },
    {
      id: 3,
      name: 'La Charly Garcia',
      price: 380,
      description: '¡BASTA!',
      category: 'pizza',
      cardImg: './assets/img/pizza-3.png',   
    },

    {
      id: 4,
      name: 'La Maradona',
      price: 450,
      description: 'Viene con coca',
      category: 'pizza',
      cardImg: './assets/img/pizza-4.png',
    },
    {
      id: 5,
      name: 'La Julian Alvarez',
      price: 990,
      description: 'Cuidado que pica',
      category: 'pizza',
      cardImg: './assets/img/pizza-5.png',
    },
    {
      id: 6,
      name: 'La Husbulla',
      price: 650,
      description: 'En honor al 1',
      category: 'pizza',
      cardImg: './assets/img/pizza-6.png',
    },
    {
      id: 7,
      name: 'Nick gi',
      price: 689,
      description: 'La que desaparece',
      category: 'pizza',
       cardImg: './assets/img/pizza-7.png',
    },
    {
      id: 8,
      name: 'Calabresa',
      price: 785,
      description: 'C/longaniza',
      category: 'pizza',
      cardImg: './assets/img/pizza-8.jpg',
    },
    {
      id: 9,
      name: 'La Clasica',
      price: 450,
      description: "Muzzarella",
      category: 'pizza',
      cardImg: './assets/img/pizza-9.jpg' },
    {
      id: 10,
      name: 'La Napo',
      price: 650,
      description: 'Clasica Napoletana',
      category: 'pizza',
      cardImg: './assets/img/pizza-10.jpg',
    },
    {
      id: 11,
      name: 'Jamon y Morron',
      price: 450,
      description: 'No falla nunca',
      category: 'pizza',
      cardImg: './assets/img/pizza-11.jpg',
    },
    {
      id: 12,
      name: '4 Quesos',
      price: 900,
      description: 'Para mas placer',
      category: 'pizza',
        cardImg: './assets/img/pizza-12.jpg',
    },
    {
      id: 13,
      name: 'Mr Cebolla',
      price: 830,
      description: 'Fugazzeta',
      category: 'pizza',
      cardImg: './assets/img/pizza-13.jpg',
    },
    {
      id: 14,
      name: 'Pepinoburguer',
      price: 1100,
      description: 'C/rodajas de pepino',
      category: 'burguer',
      cardImg: './assets/img/burguer-1.jpg',
    },
    {
      id: 15,
      name: 'Nucbarguer',
      price: 556,
      description: 'Especialidad de la casa',
      category: 'burguer',
      cardImg: './assets/img/burguer-2.jpg',
    },
    {
      id: 16,
      name: 'La Sana',
      price: 689,
      description: 'Con un poco de verde',
      category: 'burguer',
      cardImg: './assets/img/burguer-3.jpg',
    },
    {
      id: 17,
      name: 'Colesterol',
      price: 456,
      description: 'Una bomba',
      category: 'burguer',
      cardImg: './assets/img/burguer-4.jpg',
    },
    {
      id: 18,
      name: 'La Mantequita',
      price: 4.89,
      description: 'No te vas a arrepentir',
      category: 'burguer',
      cardImg: './assets/img/burguer-5.jpg',
    },
    {
      id: 19,
      name: 'Encebollada',
      price: 900,
      description: 'C/Cebolla caramelizada',
      category: 'fritas',
      cardImg: './assets/img/fritas-1.jpg',
    },
    {
      id: 20,
      name: 'Fritas Nucba',
      price: 400,
      description: 'C/Cheddar y verdeo',
      category: 'fritas',
      cardImg: './assets/img/fritas-2.jpg',
    },
    {
      id: 21,
      name: 'Fritas Nucba Vip',
      price: 800,
      description: 'C/Cheddar,verdeo y Bacon',
      category: 'fritas',
      cardImg: './assets/img/fritas-3.jpg',
    },
    {
      id: 22,
      name: 'Fritas Clasicas',
      price: 300,
      description: 'Fritas simples',
      category: 'fritas',
      cardImg: './assets/img/fritas-4.jpg',
    },
    {
      id: 23,
      name: 'A La Provenzale',
      price: 600,
      description: 'Fritas c/provenzal',
      category: 'fritas',
      cardImg: './assets/img/fritas-5.jpg',
    },
    {
      id: 24,
      name: 'El Solitario',
      price: 420,
      description: 'Pizza Para 1',
      category: 'individuales',
      cardImg: './assets/img/individual-1.jpg',
    },
    {
      id: 25,
      name: 'individualista',
      price: 250,
      description: 'Pizza primavera P/1',
      category: 'individuales',
      cardImg: './assets/img/individual-1.jpg',
    },
    {
      id: 26,
      name: 'Pizza Margarita',
      price: 271,
      description: 'P/1',
      category: 'individuales',
      cardImg: './assets/img/individual-1.jpg',
    },
    {
      id: 27,
      name: 'La Scalabrini Ortiz',
      price: 300,
      description: 'Pizza calabresa p/1',
      category: 'individuales',
      cardImg: './assets/img/individual-1.jpg',
    },
    {
      id: 28,
      name: 'Burrito de pollo y verduras',
      price: 600,
      description: 'Para los que estan a dieta',
      category: 'wrap',
      cardImg: './assets/img/wrap-1.jpg',
    },
    {
      id: 29,
      name: 'Burrito Vegan',
      price: 500,
      description: 'Solo vegetales',
      category: 'burrito',
       cardImg: './assets/img/wrap-2.jpg',
    },
    {
      id: 30,
      name: 'Burrito Proteico',
      price: 112,
      description: 'Jamon y huevo revuelto',
      category: 'wrap',
      cardImg: './assets/img/wrap-3.jpg',
    },
    {
      id: 31,
      name: 'Burrito Ortega',
      price: 600,
      description: 'muzza y bacon',
      category: 'wrap',
       cardImg: './assets/img/wrap-4.jpg',
    },
    {
      id: 32,
      name: 'El Chavo del 8',
      price: 76,
      description: 'Clasico Taco Mexicano',
      category: 'mexican-food',
      cardImg: './assets/img/mexico-1.jpg',
    },
    {
      id: 33,
      name: 'El Chicharito Hernandez',
      price: 865,
      description: 'Taco Picante',
      category: 'mexican-food',
      cardImg: './assets/img/mexico-2.jpg',
    },
    {
      id: 34,
      name: 'Mariachi',
      price: 929,
      description: 'Picada de mini tacos',
      category: 'mexican-food',
        cardImg: './assets/img/mexico-3.jpg',
    },
    {
      id: 35,
      name: 'Enchilada',
      price: 827,
      description: 'De pollo',
      category: 'mexican-food',
      cardImg: './assets/img/mexico-4.jpg',
    },
    {
      id: 36,
      name: 'Ferno',
      price: 555,
      description: 'Fernet con coca',
      category: 'bebida',
      cardImg: './assets/img/bebida-1.jpg',
    },
    {
      id: 37,
      name: 'sprite',
      price: 146,
      description: 'Lata 350ml',
      category: 'bebida',
      cardImg: './assets/img/bebida-2.jpg',
    },
    {
      id: 38,
      name: 'Cocucha',
      price: 5.55,
      description: 'Lata 354ml',
      category: 'bebida',
      cardImg: './assets/img/bebida-3.jpg',
    },
    {
      id: 39,
      name: '¡Que pinta!',
      price: 746,
      description: 'Pinta de cerveza artesanal',
      category: 'bebida',
      cardImg: './assets/img/bebida-4.jpg',
    },
    {
      id: 40,
      name: 'La fresa',
      price: 5.55,
      description: 'Daikiri de frutilla',
      category: 'bebida',
      cardImg: './assets/img/bebida-5.jpg',
    },
    {
      id: 41,
      name: 'Mery gin',
      price: 7.46,
      description: 'Gin tonic de lima',
      category: 'bebida',
      cardImg: './assets/img/bebida-6.jpg',
    },
    {
      id: 42,
      name: 'Gancia',
      price: 546,
      description: 'C/sprite y limon',
      category: 'bebida',
      cardImg: './assets/img/bebida-7.jpg',
    },
  ];

  function products(size){
    let chunk = [];
    for (let index = 0; index < productsData.length; index += size)
      chunk.push(productsData.slice(i, i + size));
    return chunk
  };

  const allProducts = {
    productList: products(8),
    next: 1,
    limit: products(8).length,
  }