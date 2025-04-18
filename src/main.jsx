import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Favorites from './components/Favorites.jsx'
import Recipe from './components/RecipeDetails.jsx'
import GlobalState from './context/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Favorites',
        element: <Favorites />
      },
      {
        path: '/Recipe/:id',
        element: <Recipe/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <GlobalState>
    <RouterProvider router={router}>
      <StrictMode>
        <App />
      </StrictMode>,
    </RouterProvider>
  </GlobalState>
)
