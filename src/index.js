import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contato from './Contato';
import Discord from './discord';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/discord' element={<Discord />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


