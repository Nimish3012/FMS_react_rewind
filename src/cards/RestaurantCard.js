import { cdnUrl } from "../constants";

const RestaurentCard = (props) => {
// const RestaurentCard = ({resName,stars}) => { de-structuring
    return (
        <div className="res-card">
             <img className="res-logo"
                alt="res-logo"
                src={
                    cdnUrl
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

export default RestaurentCard;