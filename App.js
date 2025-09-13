import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {resList} from "./resList";


// ch 4 (planning for our fms) 1h50m
/* 
    header
        logo
        nav items
    body
        search
        Restaurent container
            restaurant Card x1 
                -img
                -name of restraurant
                -Star Ratings

    footer
        copyright
        links
        address
        contact
*/
//removed everything so far(ch 1 to 3)

//ch 4 will begin with our FMS coding

//dynamic card with objList 
const RestaurentCard = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
    console.log(props);
    return (
        <div className="res-card">
             <img className="res-logo"
                alt="res-logo"
                // src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
                src={
                    "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"
                    // "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                    +
                    props.resData.info.cloudinaryImageId
                }
            />
            <h2>{props.resData.info.name}</h2>
            <h3>{props.resData.info.avgRating}</h3>
            <h3>{props.resData.info.sla.deliveryTime} mins</h3>
            <h5>{props.resData.info.cuisines.join(", ")}</h5>
            {/* or we can destructure this on the go , so we do not have to write props.resData.info each time */}

        </div>
    )
}


//dynamic card
const RestaurentCard1 = (props) => {
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


//when passing resList as an comple obj
// const RestaurentCard = (props) => {
// // const RestaurentCard = ({resName,stars}) => { de-structuring
//     console.log(resList);
//     console.log(props);
//     return (
//         <div className="res-card">
//              <img className="res-logo"
//                 alt="res-logo"
//                 src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
                
//             />
//             <h2>{resList[3].info.name}</h2>
//             <h3>{resList[3].info.avgRating}</h3>
//             <h3>{resList[3].info.sla.deliveryTime} mins</h3>
//             <h5>{resList[3].info.cuisines.join(", ")}</h5>

//         </div>
//     )
// }

//for single obj render with hardcoded redobj
const RestaurentCard3 = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
   const resData2 = {props}
    
return(
        <div className="res-card">

             <img className="res-logo"
                alt="res-logo"
                // src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
                src={
                    "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"
                    // "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                    +
                    props.resData.cloudinaryImageId

                }
            />
            {console.log(resObj)}
            {console.log(props)}
            {console.log(resData2)}
            <h4>{}</h4>
            {/* these are the three ways to handle objects at different levels */}
            <h4>{resObj.name}</h4>
            <h4>{props.resData.id}</h4>
            <h4>{resData2.props.resData.avgRating}</h4>

        </div>
    )
}

//static Card
// const RestaurentCard = (resname) => {
//     return (
//         <div className="res-card">
//             <img className="res-logo"
//                 alt="res-logo"
//                 src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/5/359b15f0-991e-4825-a4ea-3f38ca564050_DSC6782b65fd78b76d5482eb4dd90249af55673.JPG"
            
//             />
//             <h3>ResName</h3>
//             <h4>star Ratings</h4>
//             <h4>Delivery ETA</h4>

//         </div>
//     )
// }
const Header = () => {
    return (
        <div className="header">
            
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://img.freepik.com/premium-vector/restaurant-logo-with-spoon-fork-icon-modern-concept-lines_510136-228.jpg" 
                alt="Logo" 
                /> 
            </div>

            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )

}


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input 
                className="searchbar"
                type="text"/>
                <button className="search-button" >Search</button>
            </div>
            
            {/* static call */}
            {/* <div className="res-container">
                {/* all the res cards here */}
                {/* we will have multiple cards */}
                {/* <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
            </div> */} 

            {/* dynamic calls */}
            {/* <div className="res-container">
                {/* hard coded data */}
                {/* <RestaurentCard1 resName = "abc" stars = "1"/> 
                <RestaurentCard1 resName = "efg" stars = "3"/> */}
                {/* dynamic data */}
                {/* <RestaurentCard/> */}
                {/* single obj from hardcoded resObj */}
                {/* <RestaurentCard resData = {resObj}/> */}


                {/* we can now pass objList array items as input */}
                {/* <RestaurentCard resData ={resList[0]}/>
                <RestaurentCard resData ={resList[1]}/>
                <RestaurentCard resData ={resList[2]}/>
                <RestaurentCard resData ={resList[3]}/>
                <RestaurentCard resData ={resList[4]}/>
                <RestaurentCard resData ={resList[5]}/>
                <RestaurentCard resData ={resList[6]}/>
                <RestaurentCard resData ={resList[7]}/>

            </div>  */}

            <div className="res-container">
                {/* <RestaurentCard resData={resList[0.1,2,3,4..n]} /> */}
                {
                    resList.map(
                        (res) => (<RestaurentCard key={res.info.id} resData = {res}/>)
                    )
                }
            </div>

        </div>

    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            {/* <Footer/> */}

        </div>
    )

};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 
