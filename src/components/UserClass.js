import React from "react";

class UserClassChild extends React.Component {
  constructor(props) {
    super(props);
    console.log("Chils constructor");
    this.state = {
      count_one: 1,
      count_two: 2,
    };
    console.log("props", props);
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    console.log("child Render");
    const { count_one, count_two } = this.state;
    return (
      <div className="user-card">
        <h1>{count_one} class_Compoents</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Location:{this.props.location}</h2>
        <h2>Designation:Sowerware Enginer</h2>
        <button
          onClick={() => {
            this.setState({
              count_one: this.state.count_one + 1,
            });
          }}
        >
          Increse Count
        </button>
      </div>
    );
  }
}

export default UserClassChild;
