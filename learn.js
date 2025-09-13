import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
//till chapter 3
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

//chapter 4 from here
//for css of a child we can user parent > child {
// }
// we can also select :hover on items to use a separate style on hover 
//setting width to 100% for the inner div sets width = width of outer div
//flex does horizontal styles
//justify contents : space between can be used to seperate two child divs inside the parent div to the left and right most

//our res container can contain a lot of restaurants, so instead of creating each card
//we create a resuable component , which takes parameters and renders likewise

//when we want to send dynamic data to the same componenet , we do it using props,
//everything we used at function call (all the parameters are collectively send as a sigle js obj : props)
//so we can directly/dynamically load {props.name}

//dynamic card
const RestaurentCard = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring

    return (
        <div className="res-card">
             <img className="res-logo"
                alt="res-logo"
                src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
            
            />
            <h3>{props.resName}</h3>
            <h4>{props.stars}</h4>
            {/* <h3>{resName}</h3> //destructured
            <h4>{stars}</h4> */}
            <h4>Delivery ETA</h4>

        </div>
    )
}

<div className="res-container">
                <RestaurentCard resName = "abc" stars = "1"/>
                <RestaurentCard resName = "efg" stars = "3"/>
                <RestaurentCard resName = "xyz" stars = "5"/>
            </div>


//config Driver UI
//all the UI is redered based on a config / data 

//so whenever you pass a obj to another obj in js ,it get encapsulated inside it for obj inside obj ,
// for 

{/* <RestaurentCard resData = {resObj}/> */}

// we have
RestaurentCard = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
   const resData2 = {props}
    
return(
        <div className="res-card">

             <img className="res-logo"
                alt="res-logo"
                src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
            
            />
            {console.log(resObj)}
            {console.log(props)}
            {console.log(resData2)}
            <h4>{}</h4>
            <h4>{resObj.name}</h4>
            <h4>{props.resData.id}</h4>
            <h4>{resData2.props.resData.avgRating}</h4>

        </div>
    )
}




const RestaurentCard4 = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
    console.log(resList);
    console.log(props);
    return (
        <div className="res-card">
             <img className="res-logo"
                alt="res-logo"
                src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
                
            />
            <h3>{resList[2].info.name}</h3>
            <h3>{props.resData[2].info.name}</h3>

        </div>
    )
}


//when ever using a .map property , we must pass a unique key as well
<div className="res-container">
    {
        resList.map
        (
            (res)=> (<RestaurentCard key={res.info.id} resData={res}/>)
        )
    }
</div>
//key is an essential id when using map , as react can differ old and new items on the UI
// not using key (unacceptable << index as keys <<< unique IDs
// we use modular and reusable components which can be imported and used directly