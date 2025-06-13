import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </AuthProvider>
    
  </BrowserRouter>
);

reportWebVitals();
