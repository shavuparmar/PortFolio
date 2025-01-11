import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allrouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'About',
    element:<About/>
  },
  {
    path:'Projects',
    element:<Projects/>
  },
  {
    path:'Contacts',
    element: <ContactUs/>
  }

])
 
root.render(
  <React.StrictMode>
  <RouterProvider router={allrouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
