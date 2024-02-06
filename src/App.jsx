// // src/App.jsx
// import React from 'react';
// import Navbar from './components/Navbar';
// import './index.css';

// const App = () => {
//   return (
//     <>
//     <Navbar />
//     </>
//   );
// };

// export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


