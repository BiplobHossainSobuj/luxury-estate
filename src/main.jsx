import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Root from './components/Roots/Root.jsx'
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import EstateDetails from './components/EstateDetails/EstateDetails.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import About from './components/About/About.jsx'
import Favourite from './components/Favourite/Favourite.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profileUpdate",
        element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>,
      },
      {
        path: "/favourite",
        loader:()=>fetch('/data.json'),
        element: <ProtectedRoute><Favourite></Favourite></ProtectedRoute>,
      },
      {
        path: "/estate/:id",
        element: <ProtectedRoute><EstateDetails></EstateDetails></ProtectedRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
