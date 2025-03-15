import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all products
const getAllProducts = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

// Get a single product by ID
const getSingleProduct = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new product
const createProduct = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Update product details
const updateProduct = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Delete a product
const deleteProduct = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };
