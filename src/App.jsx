  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './pages/home/home';
  import Card from './components/card/card';
  import Navbar from './components/navbar/navbar';
  import Login from './pages/login/login';
  import Register from './pages/register/register';
  import './App.css';

  function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;