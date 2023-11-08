// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/charities">Charities</Link>
      <Link to="/admin-dashboard">Admin Dashboard</Link>
    </nav>
  );
};

export default Navbar;
