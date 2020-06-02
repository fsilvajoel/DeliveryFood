// import axios from 'axios'

// const product = axios.create({ 
//     // baseURL : {BASE_URL} + 'technology'+'.json?&api-key=' + {key};
//     baseURL : 'http://localhost:3000/products',
//     responseType: "json",
// });

const getProducts = async ()=>{ 
    const response = await 	fetch('http://localhost:3000/products')
    const data = await response.json();
    console.log(data)
    // return data
    
}

export default getProducts;