import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'
import SignIn from './pages/sign-in';
import User from './pages/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

