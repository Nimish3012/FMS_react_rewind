import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  //default import 
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./styles.css";
import "./shimmer.css";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>

        </div>
    )

};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 



//ch 6
//00 State, useState , changes to dom 
// reconcilation , react fiber

// 6.1 understanding of the search component

// 6.2 Microservices:    

// 6.3 useEffect
    //function with 2 param (callback function, dependency arr)
    //no dependecy => everythime render
    //empty dependecy (only intial time render)

// 6.4 shimmer ui
// conditional rendering
// early return
// filter restrau not found