import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
export const RestaurantCard = (props) => {
  const data = useContext(UserContext);
  const { resData } = props;
  const { name, avgRating, cuisines, sla, cloudinaryImageId } = resData?.info;
  return (
    <div
      data-testid="restCard"
      className="m-4 p4 w-[280px] h-[430px] rounded-lg bg-zinc-300 hover:bg-gray-100"
    >
      <img
        className="rounded-lg h-52 w-full"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="p-3">
        <div className="font-bold py-4 text-lg">{name}</div>
        <div className="rest-start-rating rest-card-style">
          {avgRating + "Stars"}
        </div>
        <div className="rest-cusine rest-card-style">{cuisines.join(", ")}</div>
        <div className="rest-delivery-tie rest-card-style">{sla.slaString}</div>
        <div className="rest-delivery-tie rest-card-style">
          <h3>User:{data.loggedInUser}</h3>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
// inpt it gives restaurant data -> reastaurantcardpromoted lable

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-900 text-white mx-4 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
