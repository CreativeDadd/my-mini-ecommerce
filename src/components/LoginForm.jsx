// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For simplicity, we'll just console log the entered credentials
    console.log('Username:', username);
    console.log('Password:', password);
    // Call the onLogin callback if provided
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
