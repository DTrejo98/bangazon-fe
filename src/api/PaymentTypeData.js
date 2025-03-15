import { firebaseConfig } from '../utils/client';

const endpoint = firebaseConfig.databaseURL;

// Get all payment types
const getAllPaymentTypes = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/paymenttypes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Get a single payment type by ID
const getSinglePaymentType = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/paymenttypes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// Create a new payment type
const createPaymentType = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/paymenttypes`, {
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

// Update payment type details
const updatePaymentType = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/paymenttypes/${payload.id}`, {
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

// Delete a payment type
const deletePaymentType = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/paymenttypes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllPaymentTypes, getSinglePaymentType, createPaymentType, updatePaymentType, deletePaymentType };
