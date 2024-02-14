import React from "react";
import UserClassChild from "./UserClass";

class UserClassParent extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      user: {
        login: "srikanth",
        location: "hyderbad",
        avatar_url: "https://dummyimage.com/",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Adepusrikanth9666");
    const json = await data.json();
    this.setState({
      user: json,
    });
    console.log(json);
  }
  render() {
    return (
      <div className="user-card">
        <img src={this.state.user.avatar_url}></img>
        <h2>Name:{this.state.user.login}</h2>
        <h2>Location:{this.state.user.location}</h2>
        <h2>LogginedUser:{this.props.logginedUser}</h2>
      </div>
    );
  }
}
export default UserClassParent;
