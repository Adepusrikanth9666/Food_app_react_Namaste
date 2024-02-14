import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import ShimmmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaruntList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurauntPromotedCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
    // updateData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log("json", json.data?.cards[1]?.card?.card?.header?.title);
    console.log(
      "json",
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestaurantList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(restaurantList);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're Offline!!!.........Check your internet connection
      </h1>
    );
  }

  // const updateData = async () => {
  //   const headerBody = {
  //     lat: 17.406498,
  //     lng: 78.47724389999999,
  //     nextOffset: "COVCELQ4KICYp4q2obPoKjCnEzgC",
  //     widgetOffset: {
  //       NewListingView_category_bar_chicletranking_TwoRows: "",
  //       NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //       Restaurant_Group_WebView_SEO_PB_Theme: "",
  //       collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
  //       inlineFacetFilter: "",
  //       restaurantCountWidget: "",
  //     },
  //     filters: {},
  //     seoParams: {
  //       seoUrl: "https://www.swiggy.com/",
  //       pageType: "FOOD_HOMEPAGE",
  //       apiName: "FoodHomePage",
  //     },
  //     page_type: "DESKTOP_WEB_LISTING",
  //     _csrf: "CT1RNyhYfkxG-nzBvJuUhxBEtPGBe4Ybf2lsvrLw",
  //   };

  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(headerBody),
  //       headers: {
  //         Accept: "application.json",
  //         "Content-type": "application/json",
  //       },
  //     }
  //   );

  //   console.log("Updatedata", data.json());
  // };

  if (!filteredRestaruntList.length) {
    return <ShimmmerUi />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-md"
            onClick={() => {
              const fillteredResturant = restaurantList.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurantList(fillteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-md"
            onClick={() => {
              setFilterRestaurantList(
                restaurantList?.filter(
                  (restaurant) => restaurant?.info?.avgRating > 4
                )
              );
            }}
          >
            To Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 items-center">
          <label>Enter UserName: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaruntList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/` + restaurant.info.id}
          >
            {/* if the restaruant having the promoted the we have to add the promoted label on it */}
            {restaurant?.info?.isOpen ? (
              <RestaurauntPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
