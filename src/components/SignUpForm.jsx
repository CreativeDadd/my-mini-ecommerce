// SignUpForm.jsx
import React, { useState } from 'react';

const SignUpForm = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your signup logic here
    // For simplicity, we'll just console log the entered credentials
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Call the onSignUp callback if provided
    if (onSignUp) {
      onSignUp();
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <label className="block mb-2">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </label>
      <label className="block mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </label>
      <button
        type="submit"
        onClick={handleSignUp}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
