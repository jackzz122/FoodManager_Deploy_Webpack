import React from "react"; // nạp thư viện react
import { createRoot } from "react-dom/client"; // nạp thư viện react-dom
import "./index.css";
import App from "./App";
// Render component App vào #root element
const start = performance.now();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.addEventListener("load", () => {
  const end = performance.now();
  console.log(`Cold start duration: ${end - start} ms`);
});
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// const start = performance.now();
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// // Khi ứng dụng đã sẵn sàng
// window.addEventListener('load', () => {
//   const end = performance.now();
//   console.log(`Cold start duration: ${end - start} ms`);
// });
