import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Profile from './components/Profile';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Navbar from './components/Navbar';


const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {!isAuthPage && <Navbar />} {}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        
      </Routes>
    </div>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
