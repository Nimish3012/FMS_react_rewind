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
            Component: Body,

        },
        ,
        {
            path: "/cart",
            Component: Cart,
        },
        {
            path: "/about",
            Component: About,
        },
        {
            path: "/login",
            Component: Login,
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

//ch 7
//7.1 rules (nvr create a component inside an componet) it will be created on every render
// useState is hook for local variables so (nvr use useState outside the functinal component)
// (nvr use a useState inside an if(),for loop)

//7.2 Importing img
// keep all img to assests/img
//import newName from "./path"
//<img src={newName}>

// 7.3 React Router
// npm i react-router-dom
//createBrowserRouter
// RouterProvider

//7.4
// creating path and its component
// errorelement
//Link to

// 7.5 error handling
// useRouterError()
// error.status, error.statusText

// 7.6 Single Page Application
// Client Side / Server Side routing
// anchor tag href relods the page
// so we have <Link to = ""> tag

//7.7 Nested routing
// need : about page has no header
// we can't just import the header to each and every file
// instead we render a root with header <outlet> footer , and we update the outlet
// for nested routes we need outlet
//childer component renders at outlet

// 7.8 Dynamic Routing
//7.9 restaurant menu page
//link each card with restaurant page

// 7.10 fetching details from restaurant menu api
