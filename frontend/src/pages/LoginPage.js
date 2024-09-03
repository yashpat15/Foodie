import React, { useState } from 'react';
import Modal from '../components/Modal';


const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);

  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Login</button>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <button onClick={() => setIsOpen(false)} style={{ marginLeft: '10px' }}>Cancel</button>
        </form>
      </Modal>
    </>
  );
};

export default LoginForm;
