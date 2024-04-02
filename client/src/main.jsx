import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import { LandingPage } from './pages/LandingPage/LandingPage.jsx';
import { LogIn } from './pages/LogIn/LogIn.jsx';
import Chatbox from './pages/ChatBox/ChatBox.jsx';
import { Signup } from './pages/Signup/Signup.jsx';
import { LogOut } from './pages/Logout/Logout.jsx';
import { GroupsJoined } from './pages/GroupsJoined/GroupsJoined.jsx';
import { UserFollowing } from './pages/UserFollowing/UserFollowing.jsx';
import ProfileLogin from './pages/ProfileLogin/ProfileLogin.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import Groups from './pages/Groups/Groups.jsx';
import UserCard from './pages/UserCard/UserCard.jsx';
import Coding from './pages/Coding/Coding.jsx';
import Finance from './pages/Finance/Finance.jsx';
import Investing from './pages/Investing/Investing.jsx';
import Communication from './pages/Communication/Communication.jsx';
import Following from './pages/Following/Following.jsx';
import GroupSignup from './pages/GroupSignup/GroupSignup.jsx';
import AppLayout from './components/Layout/Layout.jsx';
import auth from './utils/auth.js';

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
        path: '/group-signup',
        element: <GroupSignup />
      },
      {
        path: '/logout',
        element: <LogOut />
      },
      

      // the following are authenticated
      {
        path: '/',
        element: <AppLayout/>,
        loader: function(){
          const isLoggedIn = auth.loggedIn();
          if(!isLoggedIn){
            return redirect('/login');
          }
          return null;
        },
        children: [

          {
            path: '/chatbox',
            element: <Chatbox />
          },
          {
            path: '/dashboard',
            element: <Dashboard/>
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
        
          {
            path: '/groups',
            element: <Groups />
          },
          {
            path: '/usercard',
            element: <UserCard />
          },
          {
            path: '/groups/coding',
            element: <Coding/>
          },
          {
            path: '/groups/finance',
            element: <Finance />
          },
          {
            path: '/groups/communication',
            element: <Communication />
          },
          {
            path: '/groups/investing',
            element: <Investing />
          },
          {
            path: '/following/:id',
            element: <Following />
          },
          
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
