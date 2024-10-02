import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import ProjectShowCase from './Pages/ProjectShowCase'
import NotFoundPage from './Pages/NotFoundPage';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/project/:projectId',
    element: <ProjectShowCase />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
