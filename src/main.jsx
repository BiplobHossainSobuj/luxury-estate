import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
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
import UserProfile from './components/UserProfile/UserProfile.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/profile",
        element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
