import React, { Component } from "react";
import "./App.css";

class BusRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "Ernakulam",
      destination: "Trivandrum",
      stops: []
    };
    let stopsArray = [];
  }
  handleStops = event => {
    this.stopsArray = event.target.value.split(",");
  };
  handleStart = event => {
    this.setState({ start: event.target.value});
  };
  handleDestination = event => {
    this.setState({ destination: event.target.value });
  };
  handleClick = event => {
    this.stopsArray.push(this.state.destination);
    this.stopsArray.unshift(this.state.start);
    this.setState({ stops: this.stopsArray });
  };

  render() {
    return (
      <div>
        <h1>Route Display </h1>
      
        <div>
          <label>Start:</label>
          <input type="text" onChange={this.handleStart} />
        </div>
        <div>
          <label>Destination:</label>
          <input type="text" onChange={this.handleDestination} />
        </div>
        <label>Enter the stops( comma separated ):</label>
        <input type="text" onChange={this.handleStops} />
        <div>
        <button onClick={this.handleClick}> Show </button>
        </div>
        <div className="page-card">
          {this.state.stops.map((stop, index, array) => {
            if (index < array.length - 1)
              return (
                <div>
                  <label style={{ margin: 15 }}>{stop}</label>
                  <label>&rarr;</label>
                  <label style={{ margin: 15 }}>{array[index + 1]}</label>
                </div>
              );
            else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default BusRoute;
