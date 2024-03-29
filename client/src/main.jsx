import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { LogIn } from './pages/LogIn/LogIn.jsx';
import Chatbox from './pages/ChatBox/ChatBox.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { Signup } from './pages/Signup/Signup.jsx';
import { LogOut } from './pages/Logout/Logout.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, 
      
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/logout',
        element: <LogOut />
      },
      
      {
        path: '/chatbox',
        element: <Chatbox />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
