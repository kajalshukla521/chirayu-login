import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import PhoneForgetPassword from "./components/PhoneForgetPassword";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const myRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/eCommerce-reactjs" element={<Login />} />
        <Route path="/eCommerce-reactjs/sign-up" element={<SignUp />} />
        <Route
          path="/eCommerce-reactjs/forget-password"
          element={<Forget />}
        />
        <Route
          path="/eCommerce-reactjs/forget-password-phone-number"
          element={<PhoneForgetPassword />}
        />
      </Route>
    )
  );

  return <RouterProvider router={myRoutes} />;
};

export default App;

// const App = () => {
//   const myRouter = createBrowserRouter([
//     {
//       path: "/eCommerce-reactjs",
//       element: <Login />
//     },
//     {
//       path: "/eCommerce-reactjs/sign-up",
//       element: <SignUp />
//     }
//   ])
//   return <RouterProvider router={myRouter} />
// }
