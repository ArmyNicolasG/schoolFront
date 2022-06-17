import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import App from './routes/App.js';
import Login from './routes/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/iniciar-sesion" element={<Login />} />
      </Routes>
  </BrowserRouter>
);


