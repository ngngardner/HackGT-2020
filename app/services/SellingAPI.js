const url = 'http://127.0.0.1:5000';

export const createCart = () => fetch(`${url}/carts`, { method: "POST" });

export const getCart = (id) => fetch(`${url}/carts/${id}`, { method: "GET" });

export const deleteCart = (id) => fetch(`${url}/carts/${id}`, { method: "DELETE" });

export const getCartItems = (id) => fetch(`${url}/carts/${id}/items`, { method: "GET" });

export const addItemToCart = (cartId, itemId) => fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "POST" });

export const incrementCartItem = (cartId, itemId) => fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "PATCH" });

export const decrementCartItem = (cartId, itemId) => fetch(`${url}/carts/${cartId}/items/${itemId}`, { method: "DELETE" });

export const getItem = (id) => fetch(`${url}/items/${id}`, { method: "GET" });

export const createItem = (id) => fetch(`${url}/items/${id}`, { method: "PUT" });

export const createItemPrice = (id) => fetch(`${url}/items/2/${id}`, { method: "PUT" });