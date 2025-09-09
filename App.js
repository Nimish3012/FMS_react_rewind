//we reset out app.js in ch 3;
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// ch 3 React element
const heading = React.createElement("h1", { id: "heading" }, "Chapter 3"); //not an html , but a react element => obj
//react element is an obj which when rendered to DOM => becomes html
// react.create element => ( JS object) =>  rendered as HTML
console.log(heading);

//React using JSX
// const jsxHeading = <h2> Heading  user 123</h2>; //not pure js
//react element
const jsxHeading = (
    <h1 className="heading">
        Jsx || react element
    </h1>
);  


//JSX = > transpiled before it reachers the JS Engine / browser
// Parcel does this using => Babel
//babel => transpilation (jsx into react / js engine understandable code);

//jsx code => converted to react.create element => ( JS object) =>  rendered as HTML


//functional componenet returns react element
//functional componenet returns some peice of jsx
//react componenet
const Title = () => (
    <h2> This is a title inserted in btw</h2>
);

//inside a jsx , {} can be used to use js code
//similar to js inside html

const number = 10000; 
//componenet composition
const HeadingComponent = () => {
    return <>
    <h1 className="custom">
        this is a React componenet1
    </h1>

    {/* element inside component */}
    {jsxHeading} inserting js element
    {/* componenet inside component */}
    <Title/> 
    <p> wordl</p> {number} <p>hello</p>
    <p> wordl {number } hello</p>
    <h2 className="custom">{100+200}</h2>
    </>
}
//two syntax does the same things
const HeadingComponent2 = () => (
     <h1 className="custom">
        this is a React componenet2 
    </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading); last working code passing an element directly
// root.render(HeadingComponent); if we pass the component similar to the element
// Error: Functions are not valid as a React child. This may happen if you return HeadingComponent instead of <HeadingComponent /> from render. Or maybe you meant to call this function rather than return it.

// root.render(<HeadingComponent></HeadingComponent>); correct method
root.render(<HeadingComponent/>); //more readable

//we can 
// comp inside comp ,comp inside elem, elem inside comp, elem inside elem
//jsx using {} inside anywhere does not blindly execute the js , it sanitises the 
// cros side sript attacks if any malicious js found