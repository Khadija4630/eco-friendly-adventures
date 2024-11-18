import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes.jsx/Route.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={route}></RouterProvider>
    </UserProvider>
  </StrictMode>,
)
