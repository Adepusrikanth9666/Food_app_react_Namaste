import { useContext } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
const AboutUs = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      <h1>About Page</h1>
      <User
        name={"Srikanth (functional comppp...)"}
        location={"Hyderabad_Function"}
        logginedUser={userData.loggedInUser}
      />
    </div>
  );
};

// In class components we have to use

// import UserContext from "../utils/UserContext";
// // in code render
// <UserContext.Consumer>{(data) => console.log(data.logginedUser)}</UserContext.Consumer>;

export default AboutUs;
