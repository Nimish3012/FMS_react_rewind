import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
//React using JSX
// const jsxHeading = <h1> Heading from JSX</h1>; //not pure js
//JSX = > transpiled before it reachers the JS Engine / browser 
// Parcel does this using => Babel
//babel => transpilation (jsx into react / js engine understandable code);

//jsx code => converted to react.create element => ( JS object) =>  rendered as HTML

//componenet to show changes

const fn = () => true ;

const fn2 = () => {
    return true;
};
//both the fn and fn2 are exactly the same
//similarly  below two are same as well

const HeadingComponent = () => {
    return <h1> Functional Heaading 1</h1>;
    //i prefer this syntax
}

const HeadingComponent2 = () => <h1>Functional Heaading 2</h1>;

//react element
const jsxHeading = (
    <h1 className="heading">
        this is an element
    </h1>
);  

//react component
const jsxHeading2 = () => (
    <h1 className="heading">
        This is a component
    </h1>
)

//we can directly render an element using
root.render(element_name);
//but to pass a react component
root.render(ComponenetName); //incorrect
root.render(<ComponentName/>); //correct and better readable
root.rendder(<ComponenetName></ComponenetName>) //correct


//when one component call other compnenets it is called as component compositoin
const HeadingComponentParent = () => {
    return <>
    <h1 className="custom">
        this is a React componenet1
    </h1>
    <Title/> 
    {/* another componenet as child */}
    </>
}

//inside a jsx , {} can be used to use js code
//similar to js inside html

const number = 10000;
//element is a js ultimately

//so to insert a compnenet anywhere we use
<Component/>
//and to insert a js / element  anywhere
{elementName}

//comp inside comp ,comp inside elem, elem inside comp, elem inside elem