import React, { Component } from "react";
import ReactLifeCycle from "./component/reatclifecycle";

export default class ReactLifeCycleParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      count: 0,
    };
  }

  toggleComponent() {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
    }));
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "2rem" }}>{this.state.count}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
        {/* before es6 */}
        {/* <button onClick={this.toggleComponent.bind(this)}> */}

        {/* after es6 */}
        {/* <button onClick={()=>{this.toggleComponent()}}>
              {this.state.showComponent ? 'Unmount Component' : 'Mount Component'}
            </button> */}
        {/* {this.state.shsowComponent && <ReactLifeCycle />} */}
        {/* <ReactLifeCycle /> */}
      </div>
    );
  }
}
