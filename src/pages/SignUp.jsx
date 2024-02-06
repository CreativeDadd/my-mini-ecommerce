// // SignUp.jsx
// import React from 'react';

// const SignUp = () => {
//   return (
//     <div className="container mx-auto mt-8 p-4 text-center">
//       <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
//       {/* Add sign-up form */}
//     </div>
//   );
// }

// export default SignUp;

// SignUp.jsx
import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const handleSignUp = () => {
    // You can handle redirection or other logic after successful signup
    console.log('Sign Up successful!');
  };

  return (
    <div className="container mx-auto mt-8 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
      <SignUpForm onSignUp={handleSignUp} />
    </div>
  );
};

export default SignUp;

