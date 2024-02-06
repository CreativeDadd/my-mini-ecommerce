// // ProductCard.jsx
// import React from 'react';

// const ProductCard = () => {
//   return (
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <img src="path/to/product-image.jpg" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
//       <h3 className="text-lg font-bold mb-2">Product Name</h3>
//       <p className="text-gray-600">$19.99</p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

// ProductCard.jsx
import React from 'react';

const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img src="path/to/product-image.jpg" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-bold mb-2">Product Name</h3>
      <p className="text-gray-800">$19.99</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-700 transition duration-300 ease-in-out">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
