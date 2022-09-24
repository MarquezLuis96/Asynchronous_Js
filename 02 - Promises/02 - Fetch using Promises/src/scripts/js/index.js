import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
}

/* CALLING ALL THE DATA PRODUCTS*/
// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .then(() => {
//     console.log("Hello!")
// }).catch(
//     error => console.log(error)
// );

/* CALLING ALL PRODUCTS, THEN ONE PRODUC, THEN CATEGORY*/
fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(error => {console.error("ERROR: " + error)})
.finally(() => console.log("Finally"));


/* CALLING A SINGLE PRODUCT BY ITS ID*/
// fetchData(`${API}/products/101`)
// .then(response => response.json())
// .then(product => {
//     console.log(product)
// })
// .catch(error => {console.error("ERROR: " + error)})
// .finally(() => console.log("Finally"));