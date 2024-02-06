// // // // Home.jsx
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { CiUser, CiShoppingCart } from 'react-icons/ci';

// // // const Home = () => {
// // //   return (
// // //     <div>
// // //       <h2>Welcome to Joy-E-Shop</h2>
      
// // //       {/* User Login Icon - Link to Login Page */}
// // //       <Link to="/login" className="icon-wrapper">
// // //         <CiUser />
// // //         <span>Login</span>
// // //       </Link>
      
// // //       {/* User Sign Up Icon - Link to Sign Up Page */}
// // //       <Link to="/signup" className="icon-wrapper">
// // //         <CiUser />
// // //         <span>Sign Up</span>
// // //       </Link>

// // //       {/* Cart Icon - Link to Cart Page */}
// // //       <Link to="/cart" className="icon-wrapper">
// // //         <CiShoppingCart />
// // //         <span>Cart</span>
// // //       </Link>
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // // Home.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { CiUser, CiShoppingCart } from 'react-icons/ci';

// // const Home = () => {
// //   return (
// //     <div className="container mx-auto mt-8 p-4 text-center">
// //       <h2 className="text-3xl font-bold mb-4">Welcome to Joy-E-Shop</h2>

// //       {/* User Login Icon - Link to Login Page */}
// //       <Link to="/login" className="icon-link">
// //         <CiUser className="text-4xl mb-2" />
// //         <span className="text-sm">Login</span>
// //       </Link>

// //       {/* User Sign Up Icon - Link to Sign Up Page */}
// //       <Link to="/signup" className="icon-link">
// //         <CiUser className="text-4xl mb-2" />
// //         <span className="text-sm">Sign Up</span>
// //       </Link>

// //       {/* Cart Icon - Link to Cart Page */}
// //       <Link to="/cart" className="icon-link">
// //         <CiShoppingCart className="text-4xl mb-2" />
// //         <span className="text-sm">Cart</span>
// //       </Link>
// //     </div>
// //   );
// // }

// // export default Home;



// // Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import HeroSection from '../components/HeroSection';
// import HotItemsSidebar from '../components/HotItemsSidebar';
// import ProductCard from '../components/ProductCard';

// const Home = () => {
//   return (
//     <div className="container mx-auto">
//       <HeroSection />
//       <div className="flex mt-8">
//         <HotItemsSidebar />
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {/* Product Cards */}
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           {/* Add more product cards as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import HotItemsSidebar from '../components/HotItemsSidebar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <div className="flex mt-8">
        <HotItemsSidebar />
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Product Cards */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          {/* Add more product cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;

