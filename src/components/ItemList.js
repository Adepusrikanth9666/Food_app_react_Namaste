import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
// import sampleImage from "../utils/sampleImage.jpg";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //I want to  dispatch an Action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                onClick={() => handleAddItem(item)}
                // todo: Learn this
                // onClick={handleAddItem(item)}
                // onClick={handleAddItem}

                className="p-2 bg-black text-white flex align-bottom shadow-lg rounded-lg mx-16"
              >
                Add +
              </button>
            </div>
            <img
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : "sampleImage"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
