import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactForm from './Pages/ContactForm'
import AboutPage from './Pages/AboutPage'






const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "forum",
    element: <ContactForm />,
  },
  {
   path:"about",
   element:<AboutPage/>
  }
 
 

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AllRoutes}></RouterProvider>
  </StrictMode>
)
