import { resList } from "../constants";
import RestaurentCard from "../cards/RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    //03 react uses one way data binding 
    //first parameter is a state variable , 2nd is a method to update its value, useState(default value);

    //ch 06
    //6.1
    //useEffect
    useEffect(() => {
        getRestaurants();
    }, [])
    //6.2 asycn function for our reslist API fetch
    async function getRestaurants() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setFetchedList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        } catch (error) {
            console.error("Error fetching restaurants:", error);
        } finally {
            //set loading to false
        }
    }
    const [fetchedList, setFetchedList] = useState(resList);
    const [searchInput, setSearchInput] = useState("");
    const [locationInput, setLocationInput] = useState("");
    const [filteredList, setFilteredList] = useState(fetchedList);
    // 06 

    const handleSearch = () => {
        if (searchInput === "") {
            window.alert("Enter valid text")
            setFilteredList(fetchedList);
            return;
        }

        // Pre-compute lowercase search input once
        const searchLower = searchInput.toLowerCase();

        setFilteredList(
            fetchedList.filter((res) => {
                return (
                    res.info.name.toLowerCase().includes(searchLower) ||
                    res.info.avgRating >= searchInput ||
                    res.info.sla.deliveryTime <= searchInput || // Keep original for number search
                    res.info.cuisines.some(item =>
                        item.toLowerCase().includes(searchLower)
                    )
                );
            })
        );
    }

    return (
        <>
            <div className="body">
                {/* search container modified to work :  refer learn.js for earlier version */}
                <div className="finder">
                {/*feature to be implemented later  */}
                <div className="location-container">
                        <input
                            type="text"
                            className="location-input"
                            placeholder="Your Location ?"
                            value={locationInput || ""}
                            onChange={(e) => { setLocationInput(e.target.value) }}
                        />

                        <button className="location-button" onClick={() => {  }} >Find</button>
                    </div>
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="what are you craving ?"
                            value={searchInput || ""}
                            onChange={(e) => { setSearchInput(e.target.value) }}
                        />

                        {/* 04 <button className="search-button" onClick={()=>{handlebool()}} >Search - {searchBool} "{searchInput}"</button> */}
                        {/* dom only gets updated based on a diff algo : reconciliation */}

                        <button className="search-button" onClick={() => { handleSearch() }} >Search</button>
                    </div>
                </div>

                <div className="res-container">
                    {/* Show shimmer while loading, otherwise show restaurant cards */}
                    {(false) ? (
                        <Shimmer /> //lets not use shimmer for now on
                    ) : (
                        filteredList.map(
                            (res) => (<RestaurentCard key={res.info.id} resData={res} />)
                        )
                    )}
                </div>

            </div>
        </>
    )
}

export default Body;