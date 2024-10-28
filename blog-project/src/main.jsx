import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandPage from './Components/LoginPageComps/LandPage.jsx';
import './index.css';
import App from './App.jsx';
import SignUpSection from './Components/Sign/SignUpSection.jsx'
import LoginSection from './Components/Sign/LoginSection.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandPage />,
    
  },
  {
    path: '/Signup',
      element: <SignUpSection />,
  },
  {
    path: '/login',
    element: <LoginSection/>
  },
  {
    path: '/home',
    element: <App />,
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
