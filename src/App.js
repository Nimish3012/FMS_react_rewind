import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //default import
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./styles.css";
import "./shimmer.css";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Restaurant from "./pages/restaurant";
import Profile from "./pages/Profile";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />{/* <Body/>  we need this to be dynamic */}
      <Outlet /> 
      {/* placeholder for all the childeren routes  7.7*/}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  //7.3
  {
    path: "/", //7.4
    Component: AppLayout,
    errorElement: <Error />, //7.5,
    children: [ //7.7
        {
            path : "/",
            Component: Login,

        },
        ,
        {
            path: "/cart",
            Component: Cart,
        },
        {
            path: "/about",
            Component: About,
            children: [  //8.1
              {
                path:"profile",
                Component:Profile,
              },
            ]
        },
        {
            path: "/home",
            Component: Body,
        },
        {
          path:"/restaurants/:id",
          Component: Restaurant,
        }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //7.3

// Ch 8 
// 8.1 Childer of Childer Route
//app => about=> profile

//8.2 Class Based Componenet
