// // Login.jsx
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="container mx-auto mt-8 p-4 text-center">
//       <h2 className="text-3xl font-bold mb-4">Login</h2>
//       {/* Add login form */}
//     </div>
//   );
// }

// export default Login;

// Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLogin = () => {
    // You can handle redirection or other logic after successful login
    console.log('Login successful!');
  };

  return (
    <div className="container mx-auto mt-8 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

