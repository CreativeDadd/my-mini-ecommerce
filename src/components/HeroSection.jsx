// // HeroSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <div className="flex justify-between mt-8">
//       {/* Left Section */}
//       <div className="flex-1">
//         <h1 className="text-4xl font-bold mb-4">Discover Your Style</h1>
//         <p className="text-lg mb-4">Shop the latest trends in fashion.</p>
//         <Link to="/shop" className="bg-blue-500 text-white px-6 py-2 rounded-full">Shop Now</Link>
//       </div>
//       {/* Center Section - Large Image */}
//       <div className="flex-1">
//         <img src="path/to/large-image.jpg" alt="Large Fashion Image" className="w-full h-auto rounded-md" />
//       </div>
//       {/* Right Section */}
//       <div className="w-1/4 bg-gray-200 p-4 rounded-md">
//         <h2 className="text-xl font-bold mb-4">Hot Items</h2>
//         {/* Display hot items or promotions */}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex justify-between mt-8">
      {/* Left Section */}
      <div className="flex-1 text-white">
        <h1 className="text-4xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg mb-4">Shop the latest trends in fashion.</p>
        <Link to="/shop" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">Shop Now</Link>
      </div>
      {/* Center Section - Large Image */}
      <div className="flex-1">
        <img src="path/to/large-image.jpg" alt="Large Fashion Image" className="w-full h-auto rounded-md" />
      </div>
      {/* Right Section */}
      <div className="w-1/4 bg-gray-200 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">Hot Items</h2>
        {/* Display hot items or promotions */}
      </div>
    </div>
  );
};

export default HeroSection;
