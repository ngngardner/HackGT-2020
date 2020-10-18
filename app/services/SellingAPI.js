// import { btoa } from 'btoa';
// import * as axios from 'react-native-axios';

const url = 'http://127.0.0.1:5000';

// const user = 'acct:809d8480043546049ca8cf9bceb55e2c@57ca370a-37aa-4dc7-887d-63059f620199';
// const password = 'urpassss!';

// const headers = {
//     'Authorization': 'Basic ' + btoa(user + ":" + password)
// };

// export const axiosTest = () => axios({
//     method: 'post',
//     url: `${url}/carts`,
//     Authorization: {
//         user: user,
//         password: password
//     }
// })

export const createCart = () => fetch(`${url}/carts`, { method: "POST", headers: headers });

export const getCart = (id) => fetch(`${url}/carts/${id}`, { method: "GET" });

export const deleteCart = (id) => fetch(`${url}/carts/${id}`, { method: "DELETE" });

export const getCartItems = (id) => fetch(`${url}/carts/${id}/items`, { method: "GET" });

export const addItemToCart = (cartId, itemId) => fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "POST" });

export const incrementCartItem = (cartId, itemId) => {
    console.log(cartId)
    console.log(itemId)
    // return fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "PATCH" });
}

export const decrementCartItem = (cartId, itemId) => fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "DELETE" });

export const getItem = (id) => fetch(`${url}/items/${id}`, { method: "GET" });

export const createItem = (id) => fetch(`${url}/items/${id}`, { method: "PUT" });

export const createItemPrice = (id) => fetch(`${url}/items/2/${id}`, { method: "PUT" });