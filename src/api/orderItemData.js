import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all order items
const getAllOrderItems = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orderitems`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single order item by ID
const getSingleOrderItem = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orderitems/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new order item
const createOrderItem = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orderitems`, {
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

// Update an order item
const updateOrderItem = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orderitems/${payload.id}`, {
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

// Delete an order item
const deleteOrderItem = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/orderitems/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllOrderItems, getSingleOrderItem, createOrderItem, updateOrderItem, deleteOrderItem };
