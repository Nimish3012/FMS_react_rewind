import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  //default import 
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./styles.css";

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



//ch 5 Lets Get Hooked
//00 changing the file struture 
//creating the src folder and moving files

// 01 exporting comoponents (defaul and named)

//moved header to Header.js
// moved body to Body.js
//added a Footer.js as well

//02 cleaned all the messy code 
// created a constants.js file and moved every static/ hardcoded data there
// reslist , cdnurl ,logo url and more

// 03 states and local variables
// react hook : useState
// made our search input work as it was a controlled variable

// 04 added a toggle for true false whenever the button is click
// can be use for loggin and loggout

//05 making the search btn actually work
// used filtered list usestate(resList)
//used filter. res with lowecase to check if it includes search input
