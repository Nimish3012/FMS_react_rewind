import { useParams } from "react-router"; // 7.8 Dynamic Routing
import { cdnResImg, cdnResInfo } from "../constants";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "../components/Shimmer";

const Restaurant = () => {
  const {id} = useParams(); // 7.8 Dynamic Routing

  //res info api call
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [menu, setMenu] = useState(null);
  const [resInfo,setResInfo] = useState(null);

  //7.9 restaurant menu page
  
  // 7.10 fetching details from restaurant menu api
  async function getRestaurantInfo() {
    try {
      const data = await fetch(cdnResInfo +  id );
      const json = await data.json();
      setMenu(
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
      setResInfo(json.data?.cards[2]?.card?.card?.info);
      console.log(resInfo);
      console.log(menu);
    } catch (error) {
      console.log(error);
    }
  }
  //early rendering
  if (menu == null) return <Shimmer />;
  return (
    <>
      <div className="restaurant">
        <div className="res-info">
            <img
              className="res-img"
              alt="res-logo"
              src={cdnResImg + resInfo.cloudinaryImageId}
              />
          </div>
        <div className="res-body">
          <h1>{resInfo.name} </h1>
          <div className="menu">
            {menu.map((res, index) => (
              <ul key={index}>
                <li>
                  <span>{res.card.info.name}</span>
                  <span>{res.card.info.price/100}</span>
                  </li></ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
