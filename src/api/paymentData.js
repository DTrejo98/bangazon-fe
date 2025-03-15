import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all payments
const getAllPayments = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single payment by ID
const getSinglePayment = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new payment
const createPayment = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments`, {
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

// Update an existing payment
const updatePayment = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments/${payload.id}`, {
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

// Delete a payment by ID
const deletePayment = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/payments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllPayments, getSinglePayment, createPayment, updatePayment, deletePayment };
