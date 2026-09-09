import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout.jsx'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import Login from '../../features/auth/ui/pages/Login.jsx'
import Register from '../../features/auth/ui/pages/Register.jsx'
import Home from '../../features/dashboard/ui/pages/Home.jsx'

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },
        {
            path: "/home",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRoutes
