// components/UserForm.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, resetUser } from '../redux/reducers/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetUser());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Info:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{ display: 'block', width: '100%', margin: '8px 0' }}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          style={{ display: 'block', width: '100%', margin: '8px 0' }}
        />
      </div>
      <button type="submit" style={{ marginRight: '8px' }}>
        Submit
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default UserForm;
