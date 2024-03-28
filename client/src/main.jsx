import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { LogIn } from './pages/LogIn/LogIn.jsx';
import { Register } from './pages/Register/register';
import Chatbox from './pages/ChatBox/ChatBox.jsx';
import WelcomeChat from './pages/ChatBox/WelcomeChat.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import ChatBoxApp from './pages/ChatBox/ChatBoxApp.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/landing-page',
        element: <LandingPage />
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
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
