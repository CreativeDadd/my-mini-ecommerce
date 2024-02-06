// // // // import React from'react';
// // // // import CartCountIcon from './CartCountIcon';
// // // // import { CiShoppingCart } from "react-icons/ci";
// // // // import { CiSearch } from "react-icons/ci";
// // // // import { CiUser } from "react-icons/ci";

// // // // function Navbar () {
// // // //     return (
// // // //         <>
// // // //         <div className="container py-2 flex justify-around items-center bg-slate-800">
// // // //             <h1 className="text-3xl font-bold mb-4 text-white">Joy<span className='text-blue-500'>-E-</span>Shop</h1>
// // // //             <div className='relative w-full max-w-[400px]'>
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder='Search products...'
// // // //                     className='py-2 px-6 w-full border-none bg-[#f2f3f5] rounded-full focus:outline-none'
// // // //                 />
// // // //                 <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-800 z-10' />
// // // //         </div>
// // // //             <div className="flex gap-5">
// // // //                 <a href='/' className="icon-wrapper">
// // // //                   <CiUser />
// // // //                 </a>
// // // //                 <a href='/' className="icon-wrapper relative">
// // // //                 <CartCountIcon />
// // // //                 <CiShoppingCart />
// // // //                 </a>
// // // //             </div>
// // // //         </div>
// // // //     </>
// // // //     );
// // // // };

// // // // export default Navbar;

// // // // Navbar.jsx
// // // import React from 'react';
// // // import CartCountIcon from './CartCountIcon';
// // // import { CiShoppingCart, CiSearch, CiUser } from "react-icons/ci";
// // // import { Link } from 'react-router-dom';

// // // function Navbar() {
// // //   return (
// // //     <>
// // //       <div className="container py-2 flex justify-around items-center bg-slate-800">
// // //         <Link to="/" className="text-white text-3xl font-bold mb-4">Joy<span className='text-blue-500'>-E-</span>Shop</Link>
// // //         <div className='relative w-full max-w-[400px]'>
// // //           <input
// // //             type="text"
// // //             placeholder='Search products...'
// // //             className='py-2 px-6 w-full border-none bg-[#f2f3f5] rounded-full focus:outline-none'
// // //           />
// // //           <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-800 z-10' />
// // //         </div>
// // //         <div className="flex gap-5">
// // //           <Link to="/user" className="text-white icon-wrapper">
// // //             <CiUser />
// // //           </Link>
// // //           <div className="icon-wrapper relative">
// // //             <CartCountIcon />
// // //             <CiShoppingCart />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Navbar;

// // // Navbar.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { CiShoppingCart, CiSearch, CiUser } from 'react-icons/ci';
// // import CartCountIcon from './CartCountIcon';

// // const Navbar = () => {
// //   return (
// //     <div className="container py-2 flex justify-around items-center bg-slate-800">
// //       <h1 className="text-3xl font-bold mb-4 text-white">Joy<span className='text-blue-500'>-E-</span>Shop</h1>
// //       <div className='relative w-full max-w-[400px]'>
// //         <input
// //           type="text"
// //           placeholder='Search products...'
// //           className='py-2 px-6 w-full border-none bg-[#f2f3f5] rounded-full focus:outline-none'
// //         />
// //         <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-800 z-10' />
// //       </div>
// //       <div className="flex gap-5">
// //         <Link to="/login" className="icon-wrapper">
// //           <CiUser />
// //         </Link>
// //         <Link to="/cart" className="icon-wrapper"> {/* Update the link to navigate to the Cart page */}
// //           <CartCountIcon />
// //           <CiShoppingCart />
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// // Navbar.jsx
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { CiShoppingCart, CiSearch, CiUser } from 'react-icons/ci';
// import CartCountIcon from './CartCountIcon';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleUserProfileClick = () => {
//     // Navigate to the user profile route
//     navigate('/profile');
//   };

//   return (
//     <div className="container py-2 flex justify-around items-center bg-slate-800">
//       <h1 className="text-3xl font-bold mb-4 text-white">Joy<span className='text-blue-500'>-E-</span>Shop</h1>
//       <div className='relative w-full max-w-[400px]'>
//         <input
//           type="text"
//           placeholder='Search products...'
//           className='py-2 px-6 w-full border-none bg-[#f2f3f5] rounded-full focus:outline-none'
//         />
//         <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-800 z-10' />
//       </div>
//       <div className="flex gap-5">
//         <button onClick={handleUserProfileClick} className="icon-wrapper">
//           <CiUser />
//         </button>
//         <Link to="/cart" className="icon-wrapper">
//           <CartCountIcon />
//           <CiShoppingCart />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiSearch, CiUser } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className="container py-2 flex justify-around items-center bg-slate-800">
      <Link to="/" className="text-3xl font-bold mb-4 text-white">Joy<span className='text-blue-500'>-E-</span>Shop</Link>
      <div className='relative w-full max-w-[400px]'>
        <input
          type="text"
          placeholder='Search products...'
          className='py-2 px-6 w-full border-none bg-[#f2f3f5] rounded-full focus:outline-none'
        />
        <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-800 z-10' />
      </div>
      <div className="flex gap-5">
        <Link to="/profile" className="icon-wrapper">
          <CiUser />
        </Link>
        <Link to="/cart" className="icon-wrapper">
          <CiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
