import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './Pages/404'
import HomePage from './Pages/HomePage'
import QuizPage from './Pages/QuizPage'

const router = createBrowserRouter([
  {
    path: '/quizversal/',
    element: <HomePage  />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quiz',
    element: <QuizPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
