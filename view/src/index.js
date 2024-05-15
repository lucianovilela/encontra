import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import FormUpload from './pages/FormUpload';
import Home from './pages/Home';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const routers = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="formUpload" element={<FormUpload />} />
  </Route>
);


const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();