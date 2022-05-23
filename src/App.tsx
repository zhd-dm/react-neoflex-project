import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './components/pages/LoginPage/LoginPage';
import ClaimsPage from './components/pages/ClaimsPage/ClaimsPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/claims" element={<ClaimsPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
