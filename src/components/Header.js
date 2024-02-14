import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  // Subscribing to the store using te selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-md m-2 sm:bg-yellow-100 lg:bg-green-200 ">
      <div className="logo-conainer">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Staus:{onlineStatus ? " 🟢" : " 🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/aboutUs">AboutUs</Link>
          </li>
          <li className="px-4">
            <Link to="/contactUs">ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to="/grocries">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="cart">Cart ( {cartItems.length} Items)</Link>
          </li>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border border-black px-1 mx-1 bg-orange-200 text-black w-20"
          >
            {isLogin ? "Login" : "Logout"}
          </button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
