'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createUser, updateUser } from '../../api/UserData'; // Adjust the import based on your actual API functions

// Clears out the form after the user submits the form
const initialState = {
  username: '',
  email: '',
  role: 'Customer',
  uid: '',
};

function UserForm({ obj = initialState }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  // If obj exists, populate the form with its values
  useEffect(() => {
    if (obj.username || obj.email || obj.role || obj.uid) {
      setFormInput({
        username: obj.username || '',
        email: obj.email || '',
        role: obj.role || 'Customer',
        uid: obj.uid || user?.uid,
      });
    }
  }, [obj, user]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };

    if (obj.id) {
      // If the object has an ID, update the user
      updateUser(payload).then(() => router.push('/profile'));
    } else {
      // Otherwise, create a new user
      createUser(payload).then(() => router.push('/profile'));
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Account</h2>

      {/* Username input */}
      <FloatingLabel controlId="floatingInput1" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="Enter Username" name="username" value={formInput.username} onChange={handleChange} required />
      </FloatingLabel>

      {/* Email input */}
      <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="Enter Email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      {/* Role input */}
      <FloatingLabel controlId="floatingSelect" label="Role" className="mb-3">
        <Form.Select aria-label="Role" name="role" value={formInput.role} onChange={handleChange} required>
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
        </Form.Select>
      </FloatingLabel>

      {/* Submit button */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Account</Button>
    </Form>
  );
}

UserForm.propTypes = {
  obj: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    id: PropTypes.number,
    uid: PropTypes.string,
  }),
};

export default UserForm;
