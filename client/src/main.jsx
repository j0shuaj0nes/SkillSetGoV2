import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { LogIn } from './pages/LogIn/LogIn.jsx';
import { Register } from './pages/Register/register';
import Chatbox from './pages/ChatBox/ChatBox.jsx';
import WelcomeChat from './pages/ChatBox/WelcomeChat.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import ChatBoxApp from './pages/ChatBox/ChatBoxApp.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
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
        path: '/signup',
        element: <Register/>
      },
    
      {
        path: '/chatbox',
        element: <Chatbox />
      },
      {
        path: '/welcome-chat',
        element: <WelcomeChat />
      },
      {
        path: '/chatbox-app',
        element: <ChatBoxApp />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/error-page',
        element: <ErrorPage />
      },
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
