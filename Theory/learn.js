import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

//  "scripts": {
//     "start": "rimraf dist .parcel-cache && parcel index.html --open",
//     "build": "rimraf dist && parcel build index.html",
//     "test": "jest"
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
            <h4>{}</h4>
            <h4>{resObj.name}</h4>
            <h4>{props.resData.id}</h4>
            <h4>{resData2.props.resData.avgRating}</h4>

        </div>
    )
}




const RestaurentCard4 = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring\
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

<>
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


//chapter 5 : 
//01 types of exports
//default export : any one component can be export default from one file
//default exports can be imported directly / we can also use a diferent name while importing
// export default componentName
//named export : multiple exports from a single files 
//named export is imported in {} 
// export const ComponentName

//to import everything from a file
//import * as obj from "source"
//then obj.titlename is valid
//file names can have .js or .jsx any extentions ( it matters when some libraries are exclusion to specific extentoins)


// FMS_react_rewind\
// ├── package.json          ← Main package.json with all dependencies
// ├── package-lock.json     ← Auto-generated by npm
// ├── index.html           ← Entry point (moved to root)
// ├── node_modules/        ← Single node_modules folder
// ├── src/
// │   ├── App.js           ← Clean main app component
// │   ├── styles.css       ← Your styles
// │   ├── resList.js       ← Restaurant data
// │   ├── components/
// │   │   ├── Header.js    ← Header component
// │   │   └── Body.js      ← Body component
// │   └── cards/
// │       └── RestaurantCard.js ← Restaurant card component
// ├── resources/           ← Your additional resources
// └── Theory/             ← Your documentation


//search bar
//we cant directly change the value of a react input search bar
//as react have controlled and uncontrolled variables
// react uses one way data binding 
// there has to be an on change event for this
                        
< input
    type="text"
    className="search-input"
    placeholder="what are you craving ?"
    value=""
    onChange = {(e) => console.log(e.target.value)}
/>

locla variables are not preffered in react
there has to be a state variable for making change to any value
every componenet in react maintains a state
for a local variable to be able to change the state ,
we need a useState hook

what is a state => 
what is a hook => just a js function

what is useState  => to create state variable
            
          


</>
// normal js
const variable1 = value;
// react local state variable   
const [variable , setVariable] = useState(defaulvalue);

// react uses a diff algorigthm : reconciliation 
// actually it keep tracks of all the states of every state variable (useState,etc)
// it maintains a virtual dom , whenever we update something , react

<div className="search-container">
    <input
        type="text"
        className="search-input"
        placeholder="what are you craving ?"
        value={searchInput  || ""}
        onChange={(e) => {setSearchInput(e.target.value)}}
    />
    {/* 04 <button className="search-button" onClick={()=>{handlebool()}} >Search - {searchBool} "{searchInput}"</button> */}
    {/* dom only gets updated based on a diff algo : reconciliation */}
    
    <button className="search-button" onClick={()=>{handlebool()}} >Search - {searchBool} "{searchInput}"</button>
</div>
// tracks what is Changed , using the virtual dom , and then only updats the changes to  the actual dom 
//virtual dom is maintained by react and actual dom is updated based on the changes (comparision btw both the doms)



//05 making the search btn actually work
// used filtered list usestate(resList)
//used filter. res with lowecase to check if it includes search input

const handleSearch = () => {
    if (searchInput === "") {
        window.alert("Enter valid text")
        setFilteredList(resList);
        return;
    }
    
    // Pre-compute lowercase search input once
    const searchLower = searchInput.toLowerCase();
    
    setFilteredList(
        resList.filter((res) => {
            return (
                res.info.name.toLowerCase().includes(searchLower) ||
                res.info.avgRatingString.toLowerCase().includes(searchLower) ||
                res.info.sla.deliveryTime.toString().includes(searchInput) || // Keep original for number search
                res.info.cuisines.some(item => 
                    item.toLowerCase().includes(searchLower)
                )
            );
        })
    );
}

