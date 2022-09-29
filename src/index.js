import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

// ReactDOM.render(
//     <ContextProvider>
//         <App/>
//     </ContextProvider>,
// document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);