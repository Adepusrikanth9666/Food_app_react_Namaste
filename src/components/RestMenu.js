import { useEffect, useState } from "react";
import ShimmmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_ITEMS_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCatergory";
const RestMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const [isOpen, setIsopen] = useState(true);

  if (restInfo === null) {
    return <ShimmmerUi />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const menuItems =
    restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categorie =
    restInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categorie", categorie);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* catergeries acordian */}
      {/* controlled componet */}
      {categorie.map((c, index) => (
        <RestaurantCategory
          showItems={index === showIndex && isOpen ? true : false}
          key={c.card.card.title}
          data={c?.card?.card}
          setShowIndex={() => {
            if (showIndex === index) {
              setIsopen(!isOpen);
              setShowIndex(index);
            } else {
              setIsopen(true);
              setShowIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestMenu;
