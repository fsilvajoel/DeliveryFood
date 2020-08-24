import axios from 'axios';
import { apiUrl } from './apiConstants';

// export const getComida = () => {
//   return data;
// };
// const response = await fetch("https://delivery.growtechnologies.com.br/morita/produtos/");
export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}/`);
  const data = await response.json();
  console.log(data);
  return data;
};
// export const getComida = async () => {
//   axios.get(`${apiUrl}/Comida`).then(function (response) {
//     console.log(response.data); // ex.: { user: 'Your User'}
//     return response.data;
//   });
// };

// const product = axios.create({
//     // baseURL : {BASE_URL} + 'technology'+'.json?&api-key=' + {key};
//     baseURL : 'http://localhost:3000/products',
//     responseType: "json",
// });

// const getProducts = async () => {
//   const response = await fetch('http://localhost:3000/products');
//   const data = await response.json();
//   console.log(data);
//   // return data
// };

const data = {
  Comida: {
    image: 'https://delivery.growtechnologies.com.br/media/groups/Comida.jpeg',
    categories: [
      {
        image:
          'https://delivery.growtechnologies.com.br/media/groups/Temakis.jpg',
        name: 'Temakis',
        slug: 'temakis',
        products: [
          {
            name: 'Tameki Filadelfia',
            slug: 'temaki-filadelfia',
            description: 'Descrição',
            obs: 'Observação',
            price: 25.0,
            image:
              'https://delivery.growtechnologies.com.br/media/groups/Tameki_Filadelfia.jpg',
            flavors: [
              {
                name: 'Sem arroz',
                sizes: [
                  {
                    size: 'Normal',
                    value: 3.0
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        image:
          'https://delivery.growtechnologies.com.br/media/groups/Uramakis.jpeg',
        name: 'Uramakis',
        slug: 'uramakis',
        products: [
          {
            name: 'Uramaki Pokemon',
            slug: 'uramaki-pokemon',
            description: 'Descrição',
            obs: 'Observação',
            price: 30.0,
            image:
              'https://delivery.growtechnologies.com.br/media/groups/Uramaki_Pokemon.jpeg',
            flavors: [
              {
                name: 'Cream Creese',
                sizes: [
                  {
                    size: 'Normal',
                    value: 1.0
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        image:
          'https://delivery.growtechnologies.com.br/media/groups/pizza.jpg',
        name: 'pizza',
        slug: 'pizzapower',
        products: [
          {
            name: 'Pizza',
            slug: 'pizza',
            description: 'pizza muito saborosa',
            obs: 'não há observações',
            price: 43.0,
            image:
              'https://delivery.growtechnologies.com.br/media/groups/Pizza.png',
            flavors: [
              {
                name: 'Calabresa',
                sizes: [
                  {
                    size: 'Pizza Grande',
                    value: 0.0
                  },
                  {
                    size: 'Pizza Broto',
                    value: 3.0
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  Bebida: {
    image: 'https://delivery.growtechnologies.com.br/media/groups/Bebida.jpg',
    categories: []
  }
};
