import { resList } from "../constants";
import RestaurentCard from "../cards/RestaurantCard";
import { useState } from "react";


const Body = () => {
    //03 react uses one way data binding 
    //first parameter is a state variable , 2nd is a method to update its value, useState(default value);
    const [searchInput, setSearchInput] = useState("");
    const [searchBool, setSearchBool] = useState("false");
    const [filteredList, setFilteredList] = useState(resList);
    const handleBool = () => {
        if (searchBool == "false")
            setSearchBool("true");
        else
            setSearchBool("false");
    }
    // 06 
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
                    res.info.avgRating >= searchInput ||
                    res.info.sla.deliveryTime <= searchInput  || // Keep original for number search
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

                <div className="res-container">
                    {/* <RestaurentCard resData={resList[0.1,2,3,4..n]} /> */}
                    {
                        // resList.map(
                        //     (res) => (<RestaurentCard key={res.info.id} resData={res} />)
                        // ) used to map everything
                        filteredList.map(
                            (res) => (<RestaurentCard key={res.info.id} resData={res} />)
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default Body;