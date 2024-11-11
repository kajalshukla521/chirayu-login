import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import PhoneForgetPassword from "./components/PhoneForgetPassword";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const myRoutes = createBrowserRouter([
    {
      path: "/eCommerce-reactjs",
      element: <Login />,
    },
    {
      path: "/eCommerce-reactjs/sign-up",
      element: <SignUp />,
    },
    {
      path: "/eCommerce-reactjs/forget-password",
      element: <Forget />,
    },
    {
      path: "/eCommerce-reactjs/forget-password-phone-number",
      element: <PhoneForgetPassword />,
    },
  ]);

  return (
    <BrowserRouter basename="/eCommerce-reactjs">
      <RouterProvider router={myRoutes} />
    </BrowserRouter>
  );
};

export default App;
