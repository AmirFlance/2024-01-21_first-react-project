import React from "react";
import  ReactDOM  from "react-dom/client"; //important to add -dom
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);