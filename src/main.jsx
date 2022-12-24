import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Services from './Pages/Services';
import Shop from './Pages/Shop';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
