// UserProfile.js

// const UserProfile = () => {
//   return (
//     <div className="container mx-auto mt-8 p-4 text-center">
//       <h2 className="text-3xl font-bold mb-4">User Profile</h2>
//       {/* Add user profile content */}
//     </div>
//   );
// }

// export default UserProfile;



import React from 'react';

const UserProfile = () => {
  // Mock user data (replace with your actual user data)
  const user = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    // Add more user data as needed
  };

  return (
    <div className="container mx-auto mt-8 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-2">User Information</h3>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        {/* Add more user information as needed */}
      </div>
    </div>
  );
};

export default UserProfile;

