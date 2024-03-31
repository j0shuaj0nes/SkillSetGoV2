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
import { GroupsJoined } from './pages/GroupsJoined/GroupsJoined.jsx';
import { UserFollowing } from './pages/UserFollowing/UserFollowing.jsx';
import ProfileLogin from './pages/ProfileLogin/ProfileLogin.jsx';



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
      {
        path: '/groups-joined',
        element: <GroupsJoined />
      },
      {
        path: '/user-following',
        element: <UserFollowing />
      },
      {
        path: '/profile-login',
        element: <ProfileLogin/>
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
