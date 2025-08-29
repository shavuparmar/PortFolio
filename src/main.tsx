import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactForm from './Pages/ContactForm'






const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "forum",
    element: <ContactForm />,
  }
 
 

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AllRoutes}></RouterProvider>
  </StrictMode>
)
