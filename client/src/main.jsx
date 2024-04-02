import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import SingleThought from './pages/SingleThought';
// import Profile from './pages/Profile';
import Error from './pages/Error';
import { ContactUs } from './pages/ContactUs/ContactUs.jsx';
import Groups from './pages/Groups/Groups.jsx';
import UserCard from './pages/UserCard/UserCard.jsx';
import Coding from './pages/Coding/Coding.jsx';
import Finance from './pages/Finance/Finance.jsx';
import Investing from './pages/Investing/Investing.jsx';
import Communication from './pages/Communication/Communication.jsx';
import Following from './pages/Following/Following.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
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
        element: <Coding />
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
