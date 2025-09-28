import { Link } from "react-router";
import { cdnResImg } from "../constants";

const RestaurentCard = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
const {name, avgRating,sla,cuisines,cloudinaryImageId,id}=props.resData.info;
    return (
        <div className="res-card">
            {/* link to ch 7.4 */}
            {/* link each card with restaurant page */}
            <Link to={"/restaurants/"+id} style={{ textDecoration: 'none', color: 'inherit'}}>
             <img className="res-logo"
                alt="res-logo"
                src={
                    cdnResImg
                    +
                    cloudinaryImageId
                }
            />
            <h2>{name}</h2>
            <h3>{avgRating}</h3>
            <h3>{sla.deliveryTime} mins</h3>
            <h5>{cuisines.join(", ")}</h5>
            {/* or we can destructure this on the go , so we do not have to write props.resData.info each time */}
                </Link>
        </div>
    )
}

export default RestaurentCard;