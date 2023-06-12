import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu";
import OurShop from "../../Pages/OurShop/OurShop";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "../../Shared/PrivateRoute/PrivateRoute"


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <OurMenu></OurMenu>
        },
        {
          path: "/shop/:category",
          element: <OurShop></OurShop>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "myCart",
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);