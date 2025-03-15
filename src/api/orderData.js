import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all orders
const getAllOrders = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single order by ID
const getSingleOrder = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new order
const createOrder = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders`, {
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

// Update an existing order
const updateOrder = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders/${payload.id}`, {
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

// Delete an order by ID
const deleteOrder = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder };
